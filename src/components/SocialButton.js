import React from 'react'
import Icon from '@hackclub/icons'
import { Link } from 'components/Link'

export default ({ href, service, size = 48, ...props }) => (
  <Link
    target="_blank"
    rel="noopener"
    href={href}
    mx={3}
    color="muted"
    aria-label={service}
    style={{ marginRight: '0.5rem' }}
    children={<Icon glyph={service} size={size} />}
    {...props}
  />
)
