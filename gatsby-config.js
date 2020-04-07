const ENV = require("gatsby-env-variables").ENV;

module.exports = {
  plugins: [
    'gatsby-env-variables',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-root-import',
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://f90a16bb1aa0472caa4206bd83cc1888@o200670.ingest.sentry.io/5192447",
        environment: ENV,
        enabled: (() => "production" == ENV)()
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'simonvomeyser.de',
        short_name: 'sve.de',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/fav-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/technologies`,
      },
    },
  ],
}
