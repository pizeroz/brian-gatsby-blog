import React from "react"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogDetailsContent from '../components/BlogContent/BlogDetailsContent'

import moment from 'moment';
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <Navbar />
      <PageBanner
        pageTitle={frontmatter.title}
        homePageText="Home"
        homePageUrl="/"
        activePageText={frontmatter.title}
      />
      <BlogDetailsContent data={data} />
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
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
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { ne: $postPath } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
            tags
            excerpt
            author
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
        }
      }
    }
  }
`;

export default Template;
