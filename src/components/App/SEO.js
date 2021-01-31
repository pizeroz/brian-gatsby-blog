import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>ITsite - Thiết kế & phát triển website</title>
                <meta name="description" content="ITsite - Thiết kế & phát triển website" />
                <meta name="og:title" property="og:title" content="ITsite - Thiết kế & phát triển website"></meta>
                <meta name="twitter:card" content="ITsite - Thiết kế & phát triển website"></meta>
                <link rel="canonical" href="https://rewy-react.envytheme.com/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
