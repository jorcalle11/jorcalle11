import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "typeface-inter"

import Footer from "./Footer"
import Header from "../components/Header"

const Root = styled.div`
  display: flex !important;
  flex-direction: column !important;
  height: 100% !important;
  background-color: var(--primaryColor);
  color: var(--primaryText);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`

const Main = styled.main`
  flex: 1;
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
      <Main>{children}</Main>
      <Footer />
    </Root>
  )
}

export default Layout
