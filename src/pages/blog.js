import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogCard from '../components/BlogContent/BlogCard'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
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
                                <div className="col-lg-4 col-md-6">
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

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
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

export default Blog;
