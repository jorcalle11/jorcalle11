import React from "react"
import styled from "styled-components"

import Button from "../components/Button"
import Container from "../components/Container"
import Emoji from "../components/Emoji"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Contact = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const handleNameChange = e => setName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handleMessageChange = e => setMessage(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    console.log({ name, email, message })
    setEmail("")
    setName("")
    setMessage("")
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Wrapper>
          <h2>Contact</h2>
          <p>
            Leave a message and say hello <Emoji label="smile" children="🙂" />
          </p>
          <form onSubmit={handleSubmit}>
            <Field>
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleNameChange}
                required
              />
            </Field>
            <Field>
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Field>
            <Field>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                rows="5"
                spellCheck={true}
                value={message}
                onChange={handleMessageChange}
                required
              />
            </Field>
            <Submit type="submit">Submit</Submit>
          </form>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  label {
    margin-bottom: 0.5rem;
    color: var(--secondaryText);
  }

  input,
  textarea {
    border-width: 0.1rem;
    border-style: solid;
    border-color: var(--primaryText);
    color: var(--primaryText);
    background: none;
    padding: 0.9rem;
    font-size: 1.2rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }
`

const Submit = styled(Button)`
  width: 100%;
`

export default Contact
