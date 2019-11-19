import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
// import styled from "styled-components";

import Emoji from "./Emoji"

const DarkModeToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          style={{ display: "none" }}
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />{" "}
        <Emoji
          label="mon"
          style={{ cursor: "pointer" }}
          title="toggle dark mode"
          children="🌙️"
        />
      </label>
    )}
  </ThemeToggler>
)

export default DarkModeToggle
