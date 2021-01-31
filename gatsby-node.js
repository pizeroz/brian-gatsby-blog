/* Vendor imports */
const path = require('path');
const _ = require("lodash");
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            timeToRead
            frontmatter {
              date(formatString: "DD/MM/YYYY")
              path
              title
              tags
              excerpt
              author
              categories
              cover {
                childImageSharp {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              avatar {
                childImageSharp {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            parent {
              ... on File {
                mtime(formatString: "DD/MM/YYYY")
              }
            }
            fileAbsolutePath
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  /* Post pages */
  const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`);
  const posts = result.data.postsRemark.edges;
  posts.forEach(({ node }, index) => {
    // Check path prefix of post
    if (node.frontmatter.path.indexOf(config.pages.blog) !== 0) {
      // eslint-disable-next-line no-throw-literal
      throw `Invalid path prefix: ${node.frontmatter.path}`;
    }

    const previous = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {
        node,
        next,
        previous,
      },
    })
  })

  // Extract category data from query
  const blogCategoryTemplate = require.resolve(`./src/templates/blogCategoryTemplate.js`);
  const categories = result.data.categoriesGroup.group;

  // Make category pages
  categories.forEach(category => {
    createPage({
      path: `/danh-muc/${_.kebabCase(category.fieldValue)}/`,
      component: blogCategoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}
