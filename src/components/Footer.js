import React from "react"
import styled from "styled-components"

import Emoji from "./Emoji"
import Container from "./Container"

const CustomFooter = styled.footer`
  background-color: #f5f5f5;
  padding: 1rem 0;
  margin-top: auto !important;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const P = styled.p`
  border: 1px solid transparent;
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
`

const Footer = () => (
  <CustomFooter>
    <Container>
      <Div>
        <P>
          © {new Date().getFullYear()}, build with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </P>
        <P>
          From Sahagún with <Emoji label="heart" children="❤️" />
          {` `}
          to the <Emoji label="world" children="🌎️" />
        </P>
      </Div>
    </Container>
  </CustomFooter>
)

export default Footer
