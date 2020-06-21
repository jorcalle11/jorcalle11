import React from "react"
import styled from "styled-components"

const Li = styled.li`
  font-size: 1.1rem;
  line-height: 1.5;
`

const Item = ({ children }) => <Li>{children}</Li>

export default Item
