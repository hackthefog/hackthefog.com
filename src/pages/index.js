import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Nav from 'components/Nav'
import Header from 'home/Header'
import Team from 'home/Team'
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
        <Header />
      </Container>
    </BG>
    {/*<Container><Team /></Container>*/}
    <Footer />
  </Layout>
)
