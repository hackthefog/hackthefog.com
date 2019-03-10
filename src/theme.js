import palx from 'palx'
import { createGlobalStyle } from 'styled-components'

const palxColors = palx('#207AEE')
const colors = {
  primary: '#207AEE',
  white: '#fff',
  black: '#000',
  ...palxColors,
}

const fonts = {
  primary: `GothamRounded, 'Roboto', -apple-system, sans-serif`,
}
const fontSizes = {
  big: ['4rem', '6rem'],
  heading: ['2rem', '3rem'],
  subheading: ['1rem', '2rem'],
  description: '1.25rem',
}
const mediaQueries = {
  sm: '@media screen and (min-width: 32em)',
  md: '@media screen and (min-width: 48em)',
  lg: '@media screen and (min-width: 64em)',
  xl: '@media screen and (min-width: 80em)',
}

export const theme = {
  colors,
  fonts,
  fontSizes,
  mediaQueries,
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: ${fonts.primary};
    color: ${colors.white};
  }
`
