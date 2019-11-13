import React from 'react'
import styled from 'styled-components'

import { Heading } from 'components/Text'

const Wrapper = styled.div`
  padding-top: 2rem;
`
const FlexWrapper = styled.div`
  display: flex;
`

const About = (props) => {
  return (
    <Wrapper>
      <Heading>
        San Francisco's first high school hackathon is back.
      </Heading>
      <FlexWrapper>
        <Article />
        <Blurb />
      </FlexWrapper>
    </Wrapper>
  )
}

export default About

const Article = (props) => {
  return (
    <div />
  )
}

class Blurb extends React.Component {
  render () {

  }
}
