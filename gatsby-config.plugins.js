const config = require('./config');

module.exports = [
  'gatsby-plugin-catch-links',
  `gatsby-plugin-react-helmet`,
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-offline',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-robots-txt',
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'zxx'
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [],
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'markdown-pages',
      path: `${__dirname}/content`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Brian Lee',
      short_name: 'Brian Lee',
      start_url: '/',
      background_color: '#304CFD',
      theme_color: '#304CFD',
      display: 'standalone',
      icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      legacy: true, // this will add apple-touch-icon links to <head>. Required for
      // versions prior to iOS 11.3.
    },
  },
];
