import React from "react"
import styled from "styled-components"

const Div = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;
`
const Container = ({ children }) => <Div>{children}</Div>

export default Container
