import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Heading } from '../components/Text'
import { SplitLayout, Half } from '../components/Layouts'
import EmailForm from '../components/EmailForm'

const Description = styled.p`
  font-size: 1.5rem;
`

export default () => (
  <Layout>
    <Heading>San Francisco’s first high school hackathon is back.</Heading>
    <SplitLayout>
      <Half>todo: add article card & style everything</Half>
      <Half>
        <Description>
          Last year, we ran Hack the Fog 1.0, San Francisco’s first high school
          hackathon — it was a massive success. Hack the Fog 2.0 is coming soon.
          Sign up below and we’ll email you when registration opens.
        </Description>
        <EmailForm />
      </Half>
    </SplitLayout>
  </Layout>
)
