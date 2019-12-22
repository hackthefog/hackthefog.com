import styled from 'styled-components'
import { theme } from 'theme'

const SplitLayout = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: column-reverse;

  ${theme.mediaQueries.md} {
    flex-direction: row;
  }
`
const Half = styled.div`
  ${theme.mediaQueries.md} {
    width: 50%;
  }
`

export { SplitLayout, Half }
