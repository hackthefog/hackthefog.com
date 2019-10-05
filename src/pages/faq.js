import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Nav from 'components/Nav'
import Faq from 'components/faq'
import Footer from 'components/Footer'

const BG = styled.div`
  background-image: url(${require('../../static/header-bg.png')});
  background-size: cover;
`

export default () => (
  <Layout>
    <BG>
      <Container>
        <Nav />
        <Faq />
      </Container>
    </BG>
    <Footer />
  </Layout>
)
