import React from "react"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PostBanner from '../components/Common/PostBanner'
import Footer from "../components/App/Footer"
import BlogDetailsContent from '../components/BlogContent/BlogDetailsContent'

import moment from 'moment';
import { graphql } from "gatsby"

const BlogTemplate = ({ pageContext }) => {
  const { node: {frontmatter} } = pageContext;
  return (
    <Layout>
      <Navbar />
      <PostBanner
        pageTitle={frontmatter.title}
        homePageText="Blog"
        homePageUrl="/blog"
        activePageText={frontmatter.title}
      />
      <BlogDetailsContent data={pageContext} />
      <Footer />
    </Layout>
  )
}

export default BlogTemplate;
