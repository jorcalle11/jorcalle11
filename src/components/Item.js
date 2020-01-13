import React from "react"
import styled from "styled-components"

const Li = styled.li`
  font-size: 1.2rem;
  line-height: 1.7em;
`

const Item = ({ children }) => <Li>{children}</Li>

export default Item
