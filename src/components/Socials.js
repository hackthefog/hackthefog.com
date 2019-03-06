import React from 'react'
import styled from 'styled-components'
import SocialButton from 'components/SocialButton'
import { socials } from 'data'

const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`

export default () => (
  <Wrapper>
    {socials.map(profile => (
      <SocialButton
        key={profile.service}
        href={profile.url}
        service={profile.service}
        size={48}
      />
    ))}
  </Wrapper>
)
