import React from "react"
import styled from "styled-components"

const ContainerFluid = styled(props => <div {...props} />)`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
`

const Container = styled(ContainerFluid)`
  @media (min-width: 576px) {
    max-width: 540px;
  }

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
