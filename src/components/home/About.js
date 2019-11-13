import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'

import { Heading } from 'components/Text'

import newscard from '../../img/news-card.jpg'

const Wrapper = styled.div`
  padding-top: 2rem;
`
const FlexWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  ${theme.mediaQueries.lg} {
    flex-direction: row;
  }
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

/**********************/
/***extra components***/
/**********************/
const Newscard = styled.div`
  height: 50vw;
  width: 95%;
  background: no-repeat center/cover url("${newscard}");
  ${theme.mediaQueries.lg} {
    height: 25rem;
    width: 55%;
  }
  position: relative;

  span {
    display: block;
    width: 100%;
    height: fit-content;
    background-color: ${theme.colors.gray[9]};
    color: ${theme.colors.gray[0]};
    line-height: 1.8rem;
    font-weight: bold;
    box-sizing: border-box;
    padding: .5rem 1rem;
    font-family: Jomolhari;
    font-size: 1.2rem;
  }
  span.bot {
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${theme.colors.gray[2]};
  }
`;

const Article = (props) => {
  return (
    <Newscard>
      <span>‘Hack the Fog’ makes history as San Francisco’s first high school hackathon</span>
      <span className='bot'>sfchronicle.com</span>
      <a href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php">
        <div style={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%"}} />
      </a>
    </Newscard>
  )
}

class Blurb extends React.Component {
  render () {
    return (
      <div>
      </div>
    );
  }
}
