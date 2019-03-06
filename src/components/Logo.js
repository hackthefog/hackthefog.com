import React from 'react'

export default ({ size, color, linked, ...props }) =>
  linked ? (
    <a href="/">
      <img
        width={size}
        src={`/logo${color ? `-${color}` : ''}.svg`}
        alt="Hack the Fog logo"
        {...props}
      />
    </a>
  ) : (
    <img
      width={size}
      src={`/logo${color ? `-${color}` : ''}.svg`}
      alt="Hack the Fog logo"
      {...props}
    />
  )
