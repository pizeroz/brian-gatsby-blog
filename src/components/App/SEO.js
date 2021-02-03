import React from 'react'
import { Helmet } from "react-helmet"
const config = require('../../../config')

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>{config.siteTitle}</title>
                <meta name="description" content={config.siteDescription} />
                <meta name="og:title" property="og:title" content={config.siteTitle}></meta>
                <meta name="twitter:card" content={config.siteTitle}></meta>
                <link rel="canonical" href="https://rewy-react.envytheme.com/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
