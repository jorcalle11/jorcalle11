import React from "react"
import styled from "styled-components"

const Div = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  height: 100%;

  @media (min-width: 1200px) {
    padding-right: 3.5rem;
    padding-left: 3.5rem;
  }
`
const Container = ({ children }) => <Div>{children}</Div>

export default Container
