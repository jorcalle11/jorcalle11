/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jorge Calle`,
    siteUrl: `https://www.jorgecalle.co`,
    description: `Hi, I'm Jorge Calle! I'm a System Engineer and a JavaScript Developer from Sahagún. Welcome to my personal site!`,
    author: `@jorcalle11`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jorge Calle - JavaScript Developer`,
        short_name: `Jorge Calle`,
        start_url: `/`,
        background_color: `#F44336`,
        theme_color: `#F44336`,
        display: `minimal-ui`,
        icon: `src/images/jorge_calle_150.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-161163794-1",
      },
    },
  ],
}
