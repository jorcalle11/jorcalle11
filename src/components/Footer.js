import React from "react"
import styled from "styled-components"

import Container from "./Container"
import DarkModeToggle from "./DarkModeToggle"
import SocialMedia from "./SocialMedia"

const CustomFooter = styled.footer`
  background-color: var(--primaryColor);
  border-top: 1px solid var(--secondaryText);
  color: var(--secondaryText);
  padding: 1rem 0;
  margin-top: auto !important;
  transition: color 0.2s ease-out, background 0.2s ease-out;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const P = styled.p`
  border: 1px solid transparent;
  margin-top: 5px;
  margin-bottom: 0px;
`

const Footer = () => (
  <CustomFooter>
    <Container>
      <Div>
        <SocialMedia style={{ width: "150px" }} />
        <DarkModeToggle style={{ marginLeft: "5px" }} />
      </Div>
      <Div>
        <P>
          <small>
            jorcalle11 © {new Date().getFullYear()}, Powered by{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
            <a href="https://zeit.co/">Zeit</a>
          </small>
        </P>
      </Div>
    </Container>
  </CustomFooter>
)

export default Footer
