import React from 'react'
import Icon from '@hackclub/icons'
import { Link } from 'components/Link'
import { theme } from 'theme'

export default ({ href, service, size = 48, ...props }) => (
  <Link
    target="_blank"
    rel="noopener"
    href={href}
    mx={3}
    aria-label={service}
    style={{ marginRight: '0.5rem', color: theme.colors.gray[1] }}
    children={<Icon glyph={service} size={size} />}
    {...props}
  />
)