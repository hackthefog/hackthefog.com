import styled from 'styled-components'
import { theme } from '../theme'

export default styled.h1`
  font-size: ${theme.fontSizes.big};
  font-weight: 700;
  margin: 1rem 0 0;

  ${theme.mediaQueries.sm} {
    font-size: ${theme.fontSizes.mediumBig};
  }
`
