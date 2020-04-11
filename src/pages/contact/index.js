import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import Button from "../../components/Button"
import Container from "../../components/Container"
import Emoji from "../../components/Emoji"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const Contact = () => {
  const [body, setBody] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const url = `${process.env.GATSBY_FIREBASE_FUNCTIONS_URL}/contact`
  const { data, error, fetching } = useFetch(url, body)

  React.useEffect(() => {
    if (fetching) {
      setIsSubmitting(true)
      return
    }

    if (data) {
      const { name } = JSON.parse(body)
      navigate("/contact/success", { state: { name } })
    }

    if (error) {
      setIsSubmitting(false)
      console.error(error)
    }
  }, [fetching, data, body, error])

  const handleSubmit = event => {
    event.preventDefault()
    const values = getFormValues(event.target)
    setBody(JSON.stringify(values))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Wrapper>
          <p>
            Leave a message and say hello <Emoji label="smile" children="🙂" />
          </p>
          <form onSubmit={handleSubmit}>
            <Field>
              <label htmlFor="name">Name:</label>
              <input id="name" name="name" type="text" required />
            </Field>
            <Field>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" required />
            </Field>
            <Field>
              <label htmlFor="message">
                Message: (**markdown** _supported_)
              </label>
              <Textarea
                id="message"
                name="message"
                rows="7"
                minLength="10"
                maxLength="1000"
                spellCheck={false}
                required
              />
            </Field>
            {error && (
              <Error>
                There was a problem <Emoji label="boom" children="💥" />. Try
                again later{" "}
                <Emoji label="slighly_frowling_face" children="🙁" />{" "}
              </Error>
            )}
            <Submit type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Submit>
          </form>
        </Wrapper>
      </Container>
    </Layout>
  )
}

function useFetch(url, body) {
  const [response, setResponse] = React.useState({
    data: null,
    error: null,
    fetching: false,
  })

  React.useEffect(() => {
    if (body) {
      setResponse({ fetching: true, error: null })
      sendMessage(url, body)
        .then(data => setResponse({ data }))
        .catch(error => setResponse({ error }))
        .finally(() => setResponse(prev => ({ ...prev, fetching: false })))
    }
  }, [url, body])

  return response
}

function sendMessage(url, body) {
  return window
    .fetch(url, {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
    })
    .then(async response => {
      const data = await response.json()

      if (!response.ok) {
        return Promise.reject(data)
      }

      return data
    })
}

function getFormValues(formNode) {
  const values = {}

  for (const node of formNode.elements) {
    const name = node.getAttribute("name")
    if (name && !values[name]) {
      values[name] = node.value
    }
  }

  return values
}

const Wrapper = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7rem;

  label {
    margin-bottom: 0.3rem;
    color: var(--secondaryText);
  }

  input {
    border-width: 0.1rem;
    border-style: solid;
    border-color: var(--primaryText);
    color: var(--primaryText);
    background: none;
    padding: 0.7rem;
    font-size: 1.2rem;
  }

  input:focus {
    outline: none;
  }
`

const Textarea = styled.textarea`
  background: none;
  border-width: 0.1rem;
  border-style: solid;
  border-color: var(--primaryText);
  font-family: "Inter Regular", sans-serif;
  font-size: 1.2rem;
  color: var(--primaryText);
  padding: 0.7rem;
  overflow: auto;
  resize: none;

  &:focus {
    outline: none;
  }
`

const Error = styled.p`
  color: var(--accentColor);
`

const Submit = styled(Button)`
  margin-top: 0.7rem;
  width: 100%;
`

export default Contact
