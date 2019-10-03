import React from 'react'
import styled from 'styled-components'
import { Heading, Lead } from 'components/Text'
import '../../../static/fonts/mercury/index.css'

const Wrapper = styled.div`
  padding-bottom: 2rem;
`

export default () => (
  <Wrapper>
    <Heading>
      San Francisco’s first high school hackathon is back.
    </Heading>
    <Lead style={{marginTop: '1.5rem'}}>
      In March 2018, we made history with Hack the Fog 1.0, San Francisco’s
      first high school hackathon — it was a massive success.
      <span style={{display:'block', marginTop: '1rem'}}>
        Hack the Fog 2.0 is coming soon. Join us for another wonderful night of
        hacking and creativity in 2020. Sign up below and we’ll email you when
        registration opens.
      </span>
    </Lead>
  </Wrapper>
)
