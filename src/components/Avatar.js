import React from "react"
import styled from "styled-components"

import avatar from "../images/jorge_calle_110.png"

export default function Avatar() {
  return <Img src={avatar} alt="Jorge Calle" width="60" height="60" />
}

const Img = styled.img`
  border-radius: 50%;
  background: var(--primaryText);
`
