import React from 'react'
import Icon from '@hackclub/icons'
import { Link } from './Link'

export default ({ href, service, ...props }) => (
  <Link
    target="_blank"
    rel="noopener"
    href={href}
    mx={3}
    color="muted"
    aria-label={service}
    style={{ marginRight: '0.25rem' }}
    children={<Icon glyph={service} size={56} />}
    {...props}
  />
)
