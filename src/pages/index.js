import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Header from 'home/Header'

const BG = styled.div`
  background-image: url(${require('../../static/header-bg.png')});
`

export default () => (
  <>
    <BG>
      <Layout>
        <Header />
      </Layout>
    </BG>
  </>
)
