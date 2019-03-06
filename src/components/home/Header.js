import React from 'react'
import { Heading, Body } from 'components/Text'
import { SplitLayout, Half } from 'components/Layouts'
import EmailForm from 'components/EmailForm'

export default () => (
  <>
    <Heading>San Francisco’s first high school hackathon is back.</Heading>
    <SplitLayout>
      <Half>todo: add article card & style everything</Half>
      <Half>
        <Body>
          Last year, we ran Hack the Fog 1.0, San Francisco’s first high school
          hackathon — it was a massive success. Hack the Fog 2.0 is coming soon.
          Sign up below and we’ll email you when registration opens.
        </Body>
        <EmailForm />
      </Half>
    </SplitLayout>
  </>
)
