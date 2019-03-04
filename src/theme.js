import palx from 'palx'
import { createGlobalStyle } from 'styled-components'

const palxColors = palx('#207AEE')
const colors = {
  primary: '#207AEE',
  white: '#000',
  ...palxColors,
}

const fonts = {
  primary: `GothamRounded, 'Roboto', -apple-system, sans-serif`,
}
const fontSizes = {
  big: '3.5rem',
  medium: '2rem',
  mediumSmall: '1.8rem',
  small: '1.5rem',
  mediumBig: '2.3rem',
}
const mediaQueries = {
  sm: '@media (max-width: 32em)',
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
