import React from "react"
import styled from "styled-components"

export default function Button({
  className,
  children,
  style = {},
  type = "button",
}) {
  return (
    <CustomButton className={className} style={style} type={type}>
      {children}
    </CustomButton>
  )
}

const CustomButton = styled.button`
  outline: none;
  color: #ffffff;
  background-color: var(--accentColor);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--accentColor);
  cursor: pointer;
  font-size: 1.25rem;
  height: 52px;
  padding: 0 1rem;
  text-decoration: none;

  &&:hover {
    background-color: #d32f2f;
    text-decoration: none;
  }
`
