import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Nav from 'components/Nav'
import Header from 'home/Header'
// import Team from 'home/Team'
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
  svg {
    display: none;
    height: 4rem;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4rem;
    color: ${theme.colors.gray[9]}
  }
  #slideshow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -2;
    height: 100%;
    & * {
      min-height: 100vh;
      height: 100%;
    }
  }
  .bg {
    background-color: ${theme.colors.white}CB;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    min-height: 100vh;
    height: 100%;
  }
  .each-slide {
    & > * {
      min-height: 100vh;
      height: 100%;
    }
  }
  ${theme.mediaQueries.lg}{
    svg {
      display: block;
    }
  }
`

export default () => (
  <Layout>
    <BG>
      <Container>
        <Nav />
        <HeaderWrapper>
          <div className="bg" />
          <Slide {...properties} id="slideshow">
            {items}
          </Slide>
          <Header />
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-arrow-down fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/></svg>
        </HeaderWrapper>
      </Container>
    </BG>
    <Footer />
  </Layout>
)
