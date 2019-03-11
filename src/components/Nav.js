import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Link'
import Logo from 'components/Logo'
import { theme } from 'theme'

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.125);
  height: 12rem;
  width: 12rem;
`

const Wrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Item = styled(Link)`
  margin: 1rem 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.colors.white};
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export default () => (
  <Wrapper role="navigation">
    <Logo size="6rem" color="inverted" linked />
    <nav>{/*<Item href="/register">Register</Item>*/}</nav>
  </Wrapper>
)
