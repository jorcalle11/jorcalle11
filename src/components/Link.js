import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CustomLink = styled(props => <Link {...props} />)`
  color: var(--textLink);
  text-decoration: none;

  &&:hover {
    text-decoration: underline;
  }

  &&:active,
  &&:focus {
    outline: 0;
    border: none;
  }
`

export default ({
  to = "",
  style,
  children,
  title = "",
  partiallyActive = false,
  activeStyle = {},
}) => (
  <CustomLink
    style={style}
    to={to}
    title={title}
    partiallyActive={partiallyActive}
    activeStyle={activeStyle}
  >
    {children}
  </CustomLink>
)
