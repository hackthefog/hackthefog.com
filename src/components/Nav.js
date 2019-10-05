import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Link'
import Logo from 'components/Logo'
import { theme } from 'theme'

// eslint-disable-next-line
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
  align-items: center;
`
// eslint-disable-next-line
const Item = styled(Link)`
  margin: 1rem 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.colors.gray[8]};
  position: relative;
  display: inline-block;
  cursor: pointer;
`
const Nav = styled.nav`
  margin-left: 3rem;
  @media screen and (max-width: 760px) {
    & > * {
      display: none;
    }
  }
`

export default () => (
  <Wrapper role="navigation">
    <Logo size="6rem" linked />
    <Nav>
      <Item href="/faq">FAQ</Item>
      <Item href="/logistics">Logistics</Item>
      <Item href="/about">About</Item>
      <Item href="/sponsors">Sponsors</Item>
      <Item href="/team">Team</Item>
    </Nav>
  </Wrapper>
)