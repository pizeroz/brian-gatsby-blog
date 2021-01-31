import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

const BlogDetails = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Blog Details"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Blog Details"
            />
            <Footer />
        </Layout>
    )
}

export default BlogDetails;
