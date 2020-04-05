import React from "react"
import styled from "styled-components"

import Button from "../components/Button"
import Container from "../components/Container"
import Emoji from "../components/Emoji"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Contact = () => {
  const [body, setBody] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const url = `${process.env.GATSBY_CLOUD_FUNCTION_URL}/contact`

  const { data, error, fetching } = useFetch(url, body)
  console.log({ fetching, error })

  React.useEffect(() => {
    if (fetching) {
      setIsSubmitting(true)
      return
    }

    if (data) {
      setIsSubmitting(false)
      console.log(data)
      // navigate success page
    }

    if (error) {
      setIsSubmitting(false)
      console.error(error)
    }
  }, [fetching, data, error])

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
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                style={{ fontFamily: "inherit" }}
                name="message"
                rows="7"
                minLength="10"
                maxLength="1000"
                spellCheck={false}
                required
              />
            </Field>
            {error && (
              <Error>There was a problem 💥. Try again later 🙁 </Error>
            )}
            <Submit type="submit" disabled={isSubmitting}>
              Submit
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

  input,
  textarea {
    border-width: 0.1rem;
    border-style: solid;
    border-color: var(--primaryText);
    color: var(--primaryText);
    background: none;
    padding: 0.7rem;
    font-size: 1.2rem;
  }

  input:focus,
  textarea:focus {
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
