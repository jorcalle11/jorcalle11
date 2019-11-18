import React from "react"

export default ({ label, children }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
)
