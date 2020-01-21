import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Avatar from "./Avatar"
import Container from "./Container"
import DarkModeToggle from "./DarkModeToggle"
import NavLink from "./Link"

export default function Header({ siteTitle }) {
  const links = ["Projects", "About", "Contact"]

  const renderItem = item => (
    <Li key={item}>
      <NavLink
        to={`/${item.toLowerCase()}`}
        title={item}
        partiallyActive={true}
        activeStyle={activeStyle}
      >
        {item}
      </NavLink>
    </Li>
  )

  return (
    <CustomHeader>
      <Container>
        <Nav>
          <Brand to="/" title="Home">
            <Avatar />
            {siteTitle}
          </Brand>
          <DesktopMenu>
            {links.map(renderItem)}
            <Li>
              <DarkModeToggle />
            </Li>
          </DesktopMenu>
        </Nav>
      </Container>
    </CustomHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

const headerHeight = 90

const CustomHeader = styled.header`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight}px;
`

const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none !important;
  font-size: 1.4rem;
  font-weight: bold;

  img {
    margin-right: 10px;
  }
`

const DesktopMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`
const Li = styled.li`
  list-style-type: none;
  padding: 0px 5px;
  margin: 0;
`
const activeStyle = {
  color: "var(--accentColor)",
}

