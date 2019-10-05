import styled from 'styled-components'
import { theme } from 'theme'

export default styled.input`
  -webkit-appearance: none;
  padding: 4px 8px;
  max-width: 36rem;
  min-height: 2.25rem;
  line-height: inherit;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
  border: solid 1px ${theme.colors.gray[2]};

  &:focus {
    box-shadow: none;
  }

  ${theme.mediaQueries.md} {
    min-width: 16rem;
  }
  ${theme.mediaQueries.lg} {
    min-width: 22rem;
  }
`
