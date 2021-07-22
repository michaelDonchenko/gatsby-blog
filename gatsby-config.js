require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Website name`,
    description: `description`,
    author: `author`,
  },
  plugins: [
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
  ],
}
