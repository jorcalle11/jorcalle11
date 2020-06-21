import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import UnderConstruction from "../components/Construction"
import Emoji from "../components/Emoji"
import Container from "../components/Container"

const About = () => (
  <Layout>
    <SEO title="Projects" />
    <Container>
      <UnderConstruction pageName="Projects" />
      <p style={{ textAlign: "center" }}>
        In the meantime, you can take a look at my{" "}
        <a href="https://www.github.com/jorcalle11">Github profile</a>{" "}
        <Emoji label="grimacing-face">😬</Emoji>.
      </p>
    </Container>
  </Layout>
)

export default About
