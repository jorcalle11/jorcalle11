import React from "react"
import styled from "styled-components"

import Emoji from "./Emoji"
import Container from "./Container"

const CustomFooter = styled.footer`
  background-color: var(--secondaryColor);
  color: var(--secondaryText);
  padding: 1rem 0;
  margin-top: auto !important;
  transition: color 0.2s ease-out, background 0.2s ease-out;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const P = styled.p`
  border: 1px solid transparent;
  font-size: 0.9rem;
  margin: 0;
`

const A = styled.a`
  color: var(--accentColor);
`

const Footer = () => (
  <CustomFooter>
    <Container>
      <Div>
        <P>
          © {new Date().getFullYear()}, Powered by{" "}
          <A href="https://www.gatsbyjs.org">Gatsby</A> and{" "}
          <A href="https://zeit.co/">Zeit</A>
        </P>
        <P>
          From Sahagún with <Emoji label="heart" children="❤️" /> to the{" "}
          <Emoji label="world" children="🌎️" />
        </P>
      </Div>
    </Container>
  </CustomFooter>
)

export default Footer
