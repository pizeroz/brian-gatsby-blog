import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

const PageNotFound = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="About Us"
                homePageText="Home"
                homePageUrl="/"
                activePageText="About Us"
            />
            <div>
              <h1>Page not found</h1>
            </div>
            <Footer />
        </Layout>
    );
}

export default PageNotFound;
