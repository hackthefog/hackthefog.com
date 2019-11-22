import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Heading, Subheading } from '../components/Text'
import { Link } from '../components/Link'
import { theme } from 'theme'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export default () => (
  <Layout>
    <Wrapper>
      <Heading>404!</Heading>
      <Subheading>
        Sorry, that page isn’t here.<br />
        <Link href="/" style={{ color: theme.colors.gray[9] }}>
          Go home »
        </Link>
      </Subheading>
    </Wrapper>
  </Layout>
)
