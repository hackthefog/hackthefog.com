import React from 'react'

export default ({ size, color, linked, ...props }) => (
  <>
    {linked ? (
      <a href="/">
        <img width={size} src={`/logo${color ? `-${color}` : ''}.svg`} />
      </a>
    ) : (
      <img width={size} src={`/logo${color ? `-${color}` : ''}.svg`} />
    )}
  </>
)
