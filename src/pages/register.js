import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from 'theme'

const Div = styled.div`
  margin: 0;
  height: 100vh;
  overflow: hidden;
  iframe{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    border:0;
  }
`;

export default (props) => {
  return (
    <Div>
      <GlobalStyle/>
      <iframe title="typeform" id="typeform-full" width="100%" height="100%" frameborder="0" src="https://hackthefog.typeform.com/to/gY0Nro"></iframe>
    </Div>
  )
};
