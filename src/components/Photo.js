import React from "react"
import styled from "styled-components"
import avatar350 from "../images/jorge_calle_350.png"
import avatar200 from "../images/jorge_calle_200.png"

export default function Photo({ borderRadius = "0" }) {
  return (
    <Figure>
      <picture>
        <source media="(max-width: 480px)" srcSet={avatar200} />
        <source media="(min-width: 500px)" srcSet={avatar350} />
        <img alt="Jorge Calle" style={{ borderRadius }} src={avatar200} />
      </picture>
    </Figure>
  )
}

const Figure = styled.figure`
  display: block;
  text-align: center;
  margin: 0;

  img {
    width: 150px;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      width: 300px;
      height: auto;
    }
  }
`
