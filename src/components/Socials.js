import React from 'react'
import styled from 'styled-components'
import SocialButton from './SocialButton'
import { socials } from '../data.json'

const Wrapper = styled.div`
  display: flex;
  margin-left: -4px;
`

export default () => (
  <Wrapper>
    {socials.map(profile => (
      <SocialButton
        key={profile.service}
        href={profile.url}
        service={profile.service}
      />
    ))}
  </Wrapper>
)
