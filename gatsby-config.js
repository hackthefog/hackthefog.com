module.exports = {
  siteMetadata: {
    title: 'Hack the Fog 2.0',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hack the Fog 2.0',
        short_name: 'hackthefog',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#207AEE',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
  ],
}
