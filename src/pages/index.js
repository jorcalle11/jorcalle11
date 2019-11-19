import React from "react"
import styled from "styled-components"

import CustomLink from "../components/Link"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const H1 = styled.h1`
  font-size: 2.5rem;
`

const P = styled.p`
  font-size: 1.2rem;
`

export default () => (
  <Layout>
    <SEO title="Home" />
    <Div>
      <H1>Hi there!</H1>
      <P>
        I'm <b>Jorge Calle</b> and I am a <b>Javascript Developer</b> from
        Sahagún (CO) with more than 4 years of experience writing code in both
        Front-end and Back-end side.
      </P>
      <CustomLink to="/contact" withDecoration={true}>
        Contact me
      </CustomLink>
    </Div>
  </Layout>
)
