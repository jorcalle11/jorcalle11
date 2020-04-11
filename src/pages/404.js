import React from "react"

import Container from "../components/Container"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SEO from "../components/Seo"

const NotFound = () => (
  <Layout>
    <SEO title="Not found" />
    <Container>
      <h1>Page not found</h1>
      <p>You hit a route that doesn't exist.</p>
      <p>
        Go{" "}
        <Link to="/" style={{ color: "var(--accentColor)" }}>
          home
        </Link>
      </p>
    </Container>
  </Layout>
)

export default NotFound
