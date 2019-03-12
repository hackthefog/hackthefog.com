import React from 'react'
import styled, { css } from 'styled-components'

export default ({ size, color, linked, ...props }) => {
  const LogoImg = styled.img`
    width: ${size};
  `
  return (
    <>
      {linked ? (
        <a href="/">
          <LogoImg src={`/logo${color ? `-${color}` : ''}.svg`} />
        </a>
      ) : (
        <LogoImg src={`/logo${color ? `-${color}` : ''}.svg`} />
      )}
    </>
  );
}
