import React from 'react'
import styled from 'styled-components'
import { Big } from 'components/Text'
import '../../../static/fonts/mercury/index.css'
import { theme } from 'theme'
import { Link } from 'react-scroll'

import mblogo from 'images/partners/missionbit.png'
import logo from 'images/logo.svg'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`
const Presenters = styled.div`
  img {
    height: 3rem;
  }
  span {
    white-space: pre;
  }
  font-weight: 700;
  font-size: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.second[1]};
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(${theme.colors.second[0]}, ${theme.colors.second[1]});
  background: -o-linear-gradient(transparent, transparent);
  -webkit-background-clip: text;

  ${theme.mediaQueries.lg} {
    color: #000;
    font-size: 4vw;
    img { height: 4vw; }
  }
`

const SVGWrap = styled.div`
  svg {
    display: block;
    height: 4rem;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4rem;
    color: ${theme.colors.gray[9]}
  }
`

export default () => (
  <Wrapper>
    <Presenters>
      <img alt="Mission Bit" src={mblogo} />
      <span> + </span>
      <img alt="Hack the Fog" src={logo} />
      <span> present</span>
    </Presenters>
    <Big style={{color: theme.colors.first, width: "100%", textAlign: "center"}}>
      Hack the Fog 2.0
    </Big>
    <SVGWrap>
      <Link smooth={true} duration={1000} to="content">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/></svg>
      </Link>
    </SVGWrap>
  </Wrapper>
)
