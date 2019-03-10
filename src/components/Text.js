import styled from 'styled-components'
import { theme } from 'theme'

const Big = styled.h1`
  font-size: ${theme.fontSizes.big[0]};
  font-weight: 700;
  margin: 1rem 0;

  ${theme.mediaQueries.lg} {
    font-size: ${theme.fontSizes.big[1]};
  }
`

const Heading = styled.h1`
  font-size: ${theme.fontSizes.heading[0]};
  font-weight: 700;
  margin: 1rem 0;

  ${theme.mediaQueries.lg} {
    font-size: ${theme.fontSizes.heading[1]};
  }
`

const Subheading = styled.h3`
  font-size: ${theme.fontSizes.subheading[0]};
  margin: 0.5rem 0;

  ${theme.mediaQueries.lg} {
    font-size: ${theme.fontSizes.subheading[1]};
  }
`

const Description = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${theme.fontSizes.description};
`

const Body = styled.p`
  font-size: 1.5rem;
`

export { Big, Heading, Subheading, Description, Body }
