import React from "react"
import styled from "styled-components"

const ContainerFluid = styled(props => <div {...props} />)`
  margin: 0px auto;
  padding: 0px 20px;
  height: 100%;
`

const Container = styled(ContainerFluid)`
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export default ({ fluid = false, ...rest }) => {
  return fluid ? <ContainerFluid {...rest} /> : <Container {...rest} />
}
