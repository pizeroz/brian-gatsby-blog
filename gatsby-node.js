/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils/pageUtils');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { allMarkdownRemark } = result.data;

  /* Post pages */
  allMarkdownRemark.edges.forEach(({ node }) => {
    // Check path prefix of post
    if (node.frontmatter.path.indexOf(config.pages.blog) !== 0) {
      // eslint-disable-next-line no-throw-literal
      throw `Invalid path prefix: ${node.frontmatter.path}`;
    }

    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        postPath: node.frontmatter.path,
      },
    })
  })
}
