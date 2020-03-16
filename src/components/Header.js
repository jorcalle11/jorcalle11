import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Avatar from "./Avatar"
import Container from "./Container"
import DarkModeToggle from "./DarkModeToggle"
import NavLink from "./Link"
import HamburgerButton from "./HamburgerButton"

export default function Header({ siteTitle }) {
  const links = ["Projects", "About", "Uses", "Contact"]
  const [isOpen, setIsOpen] = React.useState(false)
  const handleClick = () => setIsOpen(prevState => !prevState)

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
          <CustomHamburgerButton onClick={handleClick} />
        </Nav>
      </Container>
      <Overlay show={isOpen} />
      <MobileMenu show={isOpen}>{links.map(renderItem)}</MobileMenu>
    </CustomHeader>
  )
}

const renderItem = item => (
  <Li key={item}>
    <NavLink
      to={`/${item.toLowerCase()}`}
      title={item}
      partiallyActive={true}
      activeStyle={{ color: "var(--accentColor)" }}
    >
      {item}
    </NavLink>
  </Li>
)

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
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

const Li = styled.li`
  list-style-type: none;
  padding: 0px 5px;
  margin: 0;
`

const CustomHamburgerButton = styled(HamburgerButton)`
  display: block;
  z-index: 30;

  @media (min-width: 768px) {
    display: none;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.show ? "1" : "0")};
  display: ${props => (props.show ? "block" : "none")};

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled.ul`
  position: absolute;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  width: 50vw;
  background-color: var(--primaryColor);
  display: ${props => (props.show ? "block" : "none")};
  padding: 120px 20px 0px 0px;
  text-align: right;

  li {
    padding: 10px 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
