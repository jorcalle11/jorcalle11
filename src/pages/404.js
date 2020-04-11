import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"

const NotFound = () => (
  <Layout>
    <SEO title="Not found" />
    <Container>
      <h1>Page not found</h1>
      <p>You hit a route that doesn't exist.</p>
      <p>
        <a
          style={{ color: "var(--accentColor)" }}
          onClick={e => {
            e.preventDefault()
            navigate(-1)
          }}
        >
          Go Back
        </a>
      </p>
    </Container>
  </Layout>
)

export default NotFound
