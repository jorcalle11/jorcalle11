import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "./Container"
import CustomLink from "./Link"
import DarkModeToggle from "./DarkModeToggle"

const Brand = ({ children }) => <h2 style={{ margin: 0 }}>{children}</h2>

const CustomHeader = styled.header`
  padding: 1.3rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Li = styled.li`
  list-style-type: none;
  padding: 0px 5px;
  margin: 0;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`

const Header = ({ siteTitle }) => (
  <CustomHeader>
    <Container>
      <Nav>
        <Brand>
          <CustomLink to="/">{siteTitle}</CustomLink>
        </Brand>
        <Ul>
          <Li>
            <CustomLink to="/projects">Projects</CustomLink>
          </Li>
          {/* <Li>
          <CustomLink to="/blog">Blog</CustomLink>
        </Li> */}
          <Li>
            <CustomLink to="/about">About</CustomLink>
          </Li>
          <Li>
            <CustomLink to="/contact">contact</CustomLink>
          </Li>
          <Li>
            <DarkModeToggle />
          </Li>
        </Ul>
      </Nav>
    </Container>
  </CustomHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
