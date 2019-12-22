const path = require('path')

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
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        home: path.join(__dirname, 'src/components/home'),
        pages: path.join(__dirname, 'src/pages'),
        theme: path.join(__dirname, 'src/theme'),
        data: path.join(__dirname, 'src/data'),
        images: path.join(__dirname, 'src/img'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src/img`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Jomolhari`,
            variants: [`400`]
          },
        ],
      },
    },
  ],
}
