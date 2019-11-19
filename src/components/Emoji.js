import React from "react"

export default ({ label, children, style, title }) => (
  <span style={style} role="img" title={title} aria-label={label}>
    {children}
  </span>
)
