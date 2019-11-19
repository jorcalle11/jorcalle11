import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CustomLink = styled(Link)`
  color: var(--textLink);
  text-decoration: none;

  &&:hover {
    text-decoration: underline;
  }

  &&:active {
    color: var(--accentColor);
  }

  ${props =>
    props.withDecoration &&
    `
      text-decoration: underline;

      &&:hover {
        text-decoration: none;
      }
    `}
`

export default ({ to = "", children, withDecoration = false }) => (
  <CustomLink to={to} withDecoration={withDecoration}>
    {children}
  </CustomLink>
)
