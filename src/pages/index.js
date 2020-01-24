import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Element } from 'react-scroll'

import styled from 'styled-components'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Nav from 'components/Nav'
import Button from 'components/Button'

import Header from 'home/Header'
import About from 'home/About'
import FAQ from 'home/FAQ'
import Partners from 'home/Partners'

import Footer from 'components/Footer'
import { theme } from 'theme'
import { Slide } from 'react-slideshow-image'

const BG = styled.div`
  position: relative;
  min-height: 100vh;
`
export const query = graphql`
  query MyQuery {
    allFile(filter: {sourceInstanceName: {eq: "img"}, base: {regex: "/slide/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const properties = {
  duration: 5000,
  transitionDuration: 2500,
  infinite: true,
  indicators: false,
  arrows: false,
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

const StyledButton = styled(Button)`
  ${theme.mediaQueries.sm} {
    font-size: 2.5rem;
    padding: 1rem 2rem;
  }
  font-size: 12vw;
  margin: 2rem auto 0;
  padding: 6vw 10vw;
  font-weight: bold;
`;

export default (props) => (
  <Layout>
    <BG>
      <Container
        style={{height: "100vh", background: "none"}}>
        <Nav />
        <HeaderWrapper>
          <div className="bg" />
          <Slide {...properties} id="slideshow">
            {props.data.allFile.edges.map(node =>
              <Img className="each-slide"
                fluid={node.node.childImageSharp.fluid} />
            )}
          </Slide>
          <Header />
        </HeaderWrapper>
      </Container>
      <Element name="content">
        <Container
          style={{paddingBottom: "4em"}}>
          <About>
            In March 2018, we made history with Hack the Fog 1.0, San Francisco’s first high
            school hackathon — it was a massive success.

            Hack the Fog 2.0 is happening on March 28-29, 2020. Join us for another
            wonderful night of hacking and creativity and register below!
          </About>
          <StyledButton as={Link} to="register">
            REGISTER
          </StyledButton>
        </Container>
      </Element>
      <Container>
        <FAQ />
      </Container>
      <Container
        style={{paddingBottom: "4em"}}>
        <Partners />
      </Container>
    </BG>
    <Footer />
  </Layout>
)
