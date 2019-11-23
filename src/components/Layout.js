import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "typeface-noto-sans"

import Container from "./Container"
import Footer from "./Footer"
import Header from "../components/Header"

const Root = styled.div`
  background-color: var(--primaryColor);
  color: var(--primaryText);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: color 0.2s ease-out, background 0.2s ease-out;
`

const Main = styled.main`
  height: 100%;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Root>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </Root>
  )
}

export default Layout
