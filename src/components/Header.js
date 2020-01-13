import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "./Container"
import NavLink from "./Link"
import DarkModeToggle from "./DarkModeToggle"

const Brand = styled.h2`
  margin: 0;

  a:hover {
    text-decoration: none !important;
  }
`

const CustomHeader = styled.header`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
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

const activeStyle = {
  color: "var(--accentColor)",
}

const Header = ({ siteTitle }) => (
  <CustomHeader>
    <Container>
      <Nav>
        <Brand>
          <NavLink to="/" title="Home">
            {siteTitle}
          </NavLink>
        </Brand>
        <Ul>
          {["Projects", "About", "Contact"].map(section => (
            <Li>
              <NavLink
                to={`/${section.toLowerCase()}`}
                title={section}
                partiallyActive={true}
                activeStyle={activeStyle}
              >
                {section}
              </NavLink>
            </Li>
          ))}
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
