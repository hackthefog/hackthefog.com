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
  color: ${props => props.color ? props.color : theme.colors.second[1]+`;
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(${theme.colors.second[0]}, ${theme.colors.second[1]});
    background: -o-linear-gradient(transparent, transparent);
    -webkit-background-clip: text
  ` };

  ${theme.mediaQueries.lg} {
    font-size: ${theme.fontSizes.heading[1]};
    margin: 1rem 0;
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
  font-size: ${theme.fontSizes.body};
`

const Lead = styled.p`
  margin-bottom: 1rem;
  font-size: ${theme.fontSizes.lead[0]};
  color: ${props => props.color ? props.color : theme.colors.black};

  ${theme.mediaQueries.lg} {
    font-size: ${theme.fontSizes.lead[1]};
  }
`

export { Big, Heading, Subheading, Description, Body, Lead }