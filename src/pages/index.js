import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Emoji from "../components/Emoji"
import Container from "../components/Container"

const Div = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const H1 = styled.h1`
  font-size: 2.5rem;
`

const P = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  text-align: center;
`

const CustomLink = styled(Link)`
  outline: none;
  color: #ffffff;
  background-color: var(--accentColor);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--accentColor);
  cursor: pointer;
  font-size: 1.25rem;
  height: 52px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  &&:hover {
    background-color: #d32f2f;
    text-decoration: none;
  }
`

export default () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Div>
        <H1>
          Hello world! <Emoji label="hi" title="hi" children="👋️" />
        </H1>
        <P>
          I'm <b>Jorge Calle</b> and I'm a <b>Javascript Developer</b> from
          Sahagún (CO) with more than 4 years of experience writing code in both
          Front-end and Back-end side.
        </P>
        <CustomLink to="/contact">Contact me!</CustomLink>
      </Div>
    </Container>
  </Layout>
)
