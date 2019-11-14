import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Nav from 'components/Nav'

import Header from 'home/Header'
import About from 'home/About'

import Footer from 'components/Footer'
import { theme } from 'theme'
import { Slide } from 'react-slideshow-image'

const BG = styled.div`
  position: relative;
  min-height: 100vh;
`

const properties = {
  duration: 5000,
  transitionDuration: 2500,
  infinite: true,
  indicators: false,
  arrows: false,
}
var items = [];
for (let i = 1; i < 10; i++){
  items.push(
    <div className="each-slide">
      <div style={{'backgroundImage': `url(slides/slide${i}.jpg)`,
        backgroundSize: 'cover'}}>
      </div>
    </div>
  );
}

const HeaderWrapper = styled.div`
  #slideshow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -2;
    height: 100vh;
    & * {
      height: 100vh;
    }
  }
  .bg {
    background-color: ${theme.colors.white}CB;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
  }
  .each-slide {
    & > * {
      height: 100vh;
    }
  }
`

export default () => (
  <Layout>
    <BG>
      <Container
        style={{height: "100vh", background: "none"}}>
        <Nav />
        <HeaderWrapper>
          <div className="bg" />
          <Slide {...properties} id="slideshow">
            {items}
          </Slide>
          <Header />
        </HeaderWrapper>
      </Container>
      <Container
        style={{paddingBottom: "4em"}}>
        <About />
      </Container>
    </BG>
    <Footer />
  </Layout>
)