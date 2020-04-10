import React from "react"

import Layout from "../../components/Layout"
import Container from "../../components/Container"
import Link from "../../components/Link"

export default function Success({ location }) {
  const state = location.state || {}

  return (
    <Layout>
      <Container>
        {state.name && <h2>Hey {state.name}!</h2>}
        <p>
          Thank you for taking the time to leave me a message. I will get to you
          as soon as I can.
        </p>
        <small>
          Note: You should receive a copy of the email as well. If you do not
          then it didn't work!
        </small>
        <p>
          Go to{" "}
          <Link to="/" style={{ color: "var(--accentColor)" }}>
            home
          </Link>
        </p>
      </Container>
    </Layout>
  )
}
