module.exports = {
  siteMetadata: {
    title: `Lej hoppeslotte, hoppeborge og hoppepuder`,
    description: `Over 34 års erfaring med udlejning af sjov til festen. Vi har hoppeborge i alle størrelser til både store og små arrangementer.`,
    author: `@mathiashansen`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
