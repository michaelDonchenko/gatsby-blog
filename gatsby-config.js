require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Mike's Blog`,
    description: `description`,
    author: `Michael Donchenko`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `@contentful/gatsby-transformer-contentful-richtext`,
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tprlsuheo9qb`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "sans-serif"],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
