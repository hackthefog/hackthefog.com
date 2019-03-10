import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Big, Subheading } from '../components/Text'
import { Link } from '../components/Link'
import { theme } from 'theme'

const Wrapper = styled.div`
  background-color: ${theme.colors.primary};
  text-align: center;
`

export default () => (
  <Wrapper>
    <Layout>
      <Big>404!</Big>
      <Subheading>
        Sorry, that page isn’t here.{' '}
        <Link href="/" style={{ color: theme.colors.white }}>
          Go home »
        </Link>
      </Subheading>
    </Layout>
  </Wrapper>
)
