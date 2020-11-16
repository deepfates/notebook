module.exports = {
  siteMetadata: {
    title: `deepfates`,
    description: `the personal website of Max Anton Brewer`,
    author: `@deepfates`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: false,
      },
    },
    {
      resolve: "@aengusm/gatsby-theme-brain",
      options: {
        hideDoubleBrackets: true,
        rootPath: "notebook",
        rootNote: "notebook",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#DBA740`,
        theme_color: `#DBA740`,
        display: `minimal-ui`,
        icon: `/static/deepfates.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
