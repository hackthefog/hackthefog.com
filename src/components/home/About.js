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
    align-items: flex-start;
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
        <Blurb>
          {props.children}
        </Blurb>
      </FlexWrapper>
    </Wrapper>
  )
}

export default About

/**********************/
/***extra components***/
/**********************/
const Blurb = styled.p`
  margin-top: 2rem;
  font-size: 1.5em;
  padding: 0 1em;
  ${theme.mediaQueries.lg} {
    padding: 0;
    font-size: 1.6em;
    margin-left: 2rem;
    margin-top: 0;
  }
`;

const Newscard = styled.div`
  border-radius: 1rem;
  height: 20em;
  width: 95%;
  background: no-repeat center/cover url("${newscard}");
  flex-shrink: 0;
  ${theme.mediaQueries.lg} {
    height: 25rem;
    width: 55%;
  }
  position: relative;

  span {
    border-radius: 1rem 1rem 0 0;
    display: block;
    width: 100%;
    height: fit-content;
    background-color: ${theme.colors.gray[9]};
    color: ${theme.colors.gray[0]};
    line-height: 2rem;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: .5em 1.2em;
  }
  span.bot {
    border-radius: 0 0 1rem 1rem;
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
