import React from 'react'
import Layout from '../components/Layout'
import { Heading, Subheading } from '../components/Text'
import { Link } from '../components/Link'

export default () => (
  <Layout>
    <Heading>404 — Page not found</Heading>
    <Subheading>
      Sorry, that page isn’t here. <Link href="/">Go home »</Link>
    </Subheading>
  </Layout>
)
