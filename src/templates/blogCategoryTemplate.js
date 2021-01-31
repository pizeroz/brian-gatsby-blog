import React from "react"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogCard from '../components/BlogContent/BlogCard'
import { Link, graphql } from "gatsby"

const BlogCategoryTemplate = ({ data }) => {
    debugger;
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Blog"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Blog"
            />
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        {
                            data.allMarkdownRemark && data.allMarkdownRemark.edges.map((val, key) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <div className="col-lg-4 col-md-6" key={key}>
                                    <BlogCard data={val} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}

export const query = graphql`
  query($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: {in: [$category]} } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
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
`

export default BlogCategoryTemplate;
