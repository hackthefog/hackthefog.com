import React from 'react'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Nav from 'components/Nav'
import Logistics from 'components/home/Logistics'
import Footer from 'components/Footer'
import { Heading } from 'components/Text'

export default () => (
  <Layout>
    <Container style={{minHeight: "90vh"}}>
        <Nav />
        <Heading>Logistics</Heading>
        <Logistics/>
    </Container>
    <Footer />
  </Layout>
)
