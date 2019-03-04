import React from 'react'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import { Link } from '../components/Link'

export default () => (
  <Layout>
    <Nav />
    <Heading>404 — Page not found</Heading>
    <Subheading>
      Sorry, that page isn’t here. <Link href="/">Go home »</Link>
    </Subheading>
  </Layout>
)
