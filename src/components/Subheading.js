import styled from 'styled-components'
import { theme } from '../theme'

export default styled.h3`
  font-size: ${theme.fontSizes.medium};
  margin: 0.5rem 0;

  ${theme.mediaQueries.sm} {
    font-size: ${theme.fontSizes.mediumSmall};
  }
`
