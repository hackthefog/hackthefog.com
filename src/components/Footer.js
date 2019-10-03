import React from 'react'
import styled from 'styled-components'
import Socials from 'components/Socials'
import { Description } from 'components/Text'
import { theme } from 'theme'

const Wrapper = styled.footer`
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray[9]};
`

const Microcopy = styled.span`
  line-height: 1.5;
  max-width: 24rem;
  color: ${theme.colors.white};
`

export default () => (
  <Wrapper>
    <Description style={{ color: theme.colors.white }}>Follow us</Description>
    <Socials />
    <Microcopy>
      Fiscally sponsored by The Hack Foundation. Nonprofit EIN: 81-2908499.
    </Microcopy>
  </Wrapper>
)
