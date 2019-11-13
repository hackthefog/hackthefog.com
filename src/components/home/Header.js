import React from 'react'
import styled from 'styled-components'
import { Big } from 'components/Text'
import '../../../static/fonts/mercury/index.css'
import { theme } from 'theme'

import mblogo from '../../img/missionbit.png'
import logo from '../../img/logo.svg'

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

export default () => (
  <Wrapper>
    <Presenters>
      <img src={mblogo} />
      <span> + </span>
      <img src={logo} />
      <span> present</span>
    </Presenters>
    <Big style={{color: theme.colors.first, width: "100%", textAlign: "center"}}>
      Hack the Fog 2.0
    </Big>
  </Wrapper>
)