import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "typeface-noto-sans"

import Container from "./Container"
import Footer from "./Footer"
import Header from "../components/Header"

const Root = styled.div`
  display: flex;
  flex-direction: column;
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
      <Container>{children}</Container>
      <Footer />
    </Root>
  )
}

export default Layout
