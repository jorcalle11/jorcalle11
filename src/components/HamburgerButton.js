import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default function HamburgerButton({ onClick, ...rest }) {
  const handleClick = () => {
    const button = document.querySelector("#hamburgerButton")
    button.classList.toggle("animate")
    onClick()
  }

  return (
    <MenuWrapper {...rest} onClick={handleClick}>
      <HamburgerMenu id="hamburgerButton" />
    </MenuWrapper>
  )
}

HamburgerButton.propTypes = {
  onClick: PropTypes.func,
}

HamburgerButton.defaultProps = {
  onClick: () => {},
}

const barWidth = "40px"
const barHeight = "4px"
const barSpacing = "10px"

const MenuWrapper = styled.div`
  width: ${barWidth};
  height: calc(${barHeight} + ${barSpacing}* 2);
  cursor: pointer;
`

const HamburgerMenu = styled.div`
  width: ${barWidth};
  height: ${barHeight};
  position: relative;
  transform: translateY(${barSpacing});
  background: var(--primaryText);
  transition: all 0ms 300ms;

  &&:before {
    width: ${barWidth};
    height: ${barHeight};
    content: "";
    position: absolute;
    left: 0;
    bottom: ${barSpacing};
    background: var(--primaryText);
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &&:after {
    width: ${barWidth};
    height: ${barHeight};
    content: "";
    position: absolute;
    left: 0;
    top: ${barSpacing};
    background: var(--primaryText);
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &.animate {
    background: rgba(255, 255, 255, 0);
  }

  &.animate:after {
    top: 0;
    transform: rotate(45deg);
    transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &.animate:before {
    bottom: 0;
    transform: rotate(-45deg);
    transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
`
