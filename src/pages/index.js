import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export default () => (
  <Layout>
    <Div>
      <h1>Hi there!</h1>
      <p>
        I'm <b>Jorge Calle</b> and I am a <b>Javascript Developer</b> from
        Sahagún (CO) with more than 4 years of experience writing code in both
        Front-end and Back-end side.
      </p>
      <Link to="/contact">Contact me</Link>
    </Div>
  </Layout>
)
