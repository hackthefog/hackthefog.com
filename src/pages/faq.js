import React from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Nav from 'components/Nav'
import Faq from 'components/Faq'
import Footer from 'components/Footer'
import { Heading } from 'components/Text'

export default () => (
  <Layout>
    <Container style={{minHeight: "90vh"}}>
      <Nav />
      <Heading>Frequently Asked Questions</Heading>
      <Faq/>
    </Container>
    <Footer />
  </Layout>
)
