import React from "react"
import styled from "styled-components"

import Container from "../components/Container"
import Emoji from "../components/Emoji"
import Item from "../components/Item"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SEO from "../components/Seo"
import homeOffice from "../images/desk_setup.jpg"

const Uses = () => (
  <Layout>
    <SEO title="Uses" />
    <Container>
      <p>
        Welcome to my uses page. If you are here, it is because maybe you are
        interested in the specific of some piece of software or hardware that I
        use every day.
      </p>
      <Section>
        <h2>
          <Emoji label="editor" children="📑" /> Editor + Terminal
        </h2>
        <ul>
          <Item>
            Currently, I use{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> as
            my editor and{" "}
            <a href="https://gnometerminator.blogspot.com/p/introduction.html">
              Terminator
            </a>{" "}
            as my terminal.
          </Item>
          <Item>
            My favorite themes are{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onelight">
              Atom One Light
            </a>{" "}
            for the day and{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
              Night Owl
            </a>{" "}
            for the night.
          </Item>
          <Item>
            My font is{" "}
            <a href="https://github.com/tonsky/FiraCode">Fira Code</a>, which
            comes with programming ligatures.
          </Item>
          <Item>
            I use <b>zsh</b> as my bash interpreter with a{" "}
            <a href="https://github.com/jorcalle11/custom-zsh-themes">custom</a>{" "}
            oh my zsh theme.
          </Item>
          <Item>
            The{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager">
              Project Manager
            </a>{" "}
            extension helps me to switch between projects.
          </Item>
          <Item>
            I use{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
              Eslint
            </a>{" "}
            and{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
              Prettier
            </a>{" "}
            extensions as developer tools to make sure I'm writing clean code.
          </Item>
        </ul>
      </Section>
      <Section>
        <h2>
          <Emoji label="timer" children="⏲" /> Productivity Apps
        </h2>
        <ul>
          <Item>
            I use{" "}
            <a href="https://todo.microsoft.com/tasks/">Microsoft todo list</a>{" "}
            as my daily to-do list.
          </Item>
          <Item>
            <a href="https://trello.com/">Trello</a> is where I organize and
            create cards for my personal and works projects.
          </Item>
          <Item>
            I use <a href="https://www.grammarly.com/">Grammarly</a> as my
            assistant to check typos and spelling errors when I write in
            English.
          </Item>
          <Item>
            I use <a href="https://www.getpostman.com/">Postman</a> and{" "}
            <a href="https://httpie.org">httpie</a> to test APIs.
          </Item>
        </ul>
      </Section>
      <Section>
        <h2>
          <Emoji label="laptop" children="💻" /> Desktop Setup
        </h2>
        <ul>
          <Item>
            My current machine is a Dell XPS 15 Notebook 7590 i7 2.60HGz with
            20GB of RAM and an NVIDIA GeForce GTX 1650.
          </Item>
          <Item>
            I use <b>Ubuntu</b> as my primary OS and <b>Windows 10</b> just for
            play videogames.
          </Item>
          <Item>
            I have two{" "}
            <a href="https://www.amazon.com/gp/product/B075KGLYRL/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">
              Dell U2518D
            </a>{" "}
            25 inch monitors.
          </Item>
          <Item>
            I use the{" "}
            <a href="https://www.amazon.com/WALI-Monitor-Adjustable-Capacity-M002/dp/B018MSDG84/ref=sr_1_fkmr0_1?keywords=wali+dual+monitor+desk+stand+up+to+27&qid=1578782460&sr=8-1-fkmr0">
              Wali dual monitor desk stand
            </a>{" "}
            to hang my monitors.
          </Item>
          <Item>
            I have a{" "}
            <a href="https://www.amazon.com/gp/product/B071YTQBXM/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1">
              Dell D6000
            </a>{" "}
            universal dock to connect all of my peripherals such as a mouse,
            keyboard, monitors, ethernet with only a single cable running on my
            machine.
          </Item>
          <Item>
            I use an{" "}
            <a href="https://www.amazon.com/gp/product/B01FXF7HFC/ref=ppx_yo_dt_b_asin_image_o06_s00?ie=UTF8&psc=1">
              E-Element Z-88
            </a>{" "}
            mechanical gaming keyboard.
          </Item>
          <Item>
            I have a{" "}
            <a href="https://www.amazon.com/gp/product/B0043T7FXE/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1">
              Logitech M570
            </a>{" "}
            wireless trackball mouse.
          </Item>
          <Item>
            Desk chair is an{" "}
            <a href="https://www.homecenter.com.co/homecenter-co/product/186683/Silla-Ejecutiva-Cromada-con-Brazos-Negra/186683">
              Asenti Home collection.
            </a>
          </Item>
          <Item>
            I have a{" "}
            <a href="https://www.amazon.com/gp/product/B07G58TTQH/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">
              LED Strip Lights
            </a>{" "}
            behind my desk
          </Item>
        </ul>
      </Section>
      <Section>
        <h2>
          <Emoji label="camera" children="📷" /> My Home Office
        </h2>
        <Img src={homeOffice} alt="Home Office" />
      </Section>
      <p>
        If you have any questions about any of the above items, feel free to
        reach out to me on the{" "}
        <Link to="/contact" style={{ color: "var(--accentColor)" }}>
          contact
        </Link>{" "}
        page.
      </p>
    </Container>
  </Layout>
)

const Section = styled.section`
  margin-bottom: 2rem;
`

const Img = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;

  @media (min-width: 768px) {
    margin-left: 40px;
  }
`

export default Uses
