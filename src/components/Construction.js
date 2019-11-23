import React from "react"

import Emoji from "./Emoji"

const UnderConstruction = ({ pageName }) => (
  <div>
    <p style={{ textAlign: "center" }}>
      {pageName} page under construction{" "}
      <Emoji label="construction" children="🚧" />{" "}
      <Emoji label="man" children="👷‍♂️️" />
    </p>
  </div>
)

export default UnderConstruction
