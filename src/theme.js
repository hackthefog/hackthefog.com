import palx from 'palx'
import { createGlobalStyle } from 'styled-components'

const base = '#207AEE';

const palxColors = palx(base)
const colors = {
  first: base,
  second: ['#FF7251', '#FF4F0A'],
  white: '#FFFCF9',
  ...palxColors,
}

const fonts = {
  primary: `GothamRounded, 'Roboto', -apple-system, sans-serif`,
  mercury: `Mercury, Georgia, 'Roboto', -apple-system, sans-serif`,
}
const fontSizes = {
  big: ['4rem', '6rem'],
  heading: ['2rem', '3rem'],
  subheading: ['1rem', '2rem'],
  description: '1.25rem',
  body: '1.5rem',
  lead: ['3.5vmax', '2.5vmax'],
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
    color: ${colors.black};
  }
`
