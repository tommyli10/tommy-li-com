/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `tommy-li-site`,
    description: `Tommy Li's personal website. Fullstack engineer based in Los Angeles, CA.`,
    author: `Tommy Li`,
    github: `tommyli10`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
