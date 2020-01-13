import React from "react"
import styled from "styled-components"

import Container from "../components/Container"
import Emoji from "../components/Emoji"
import Item from "../components/Item"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SEO from "../components/Seo"

const Section = styled.section`
  margin-bottom: 2rem;
`

const Uses = () => (
  <Layout>
    <SEO title="Uses" />
    <Container>
      <p>
        Welcome to my "uses" page! If you maybe are interested about the
        specific of some piece of software or hardware that I use day to day,
        then you are in the right section. <Emoji label="wink" children="😉" />
      </p>
      <p>
        If you have a question about some of the items below, feel free to reach
        out to me in the{" "}
        <Link to="/contact" style={{ color: "var(--accentColor)" }}>
          contact
        </Link>{" "}
        page.
      </p>
      <Section>
        <h2>
          <Emoji label="editor" children="📑" /> Editor + Terminal
        </h2>
        <ul>
          <Item>
            Currently I use{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> as
            my editor and{" "}
            <a href="https://gnometerminator.blogspot.com/p/introduction.html">
              Terminator
            </a>{" "}
            as my terminal.
          </Item>
          <Item>
            My favorite editor themes are{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-oneItemght">
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
            come with programming Itemgatures.
          </Item>
          <Item>
            I use <b>zsh</b> as my bash interpreter and{" "}
            <a href="https://github.com/ohmyzsh/ohmyzsh">oh my zsh</a> Itemke my
            tool for handItemng the zsh configuration.
          </Item>
          <Item>
            I use{" "}
            <a href="https://github.com/zsh-users/zsh-autosuggestions">
              zsh autosuggestions
            </a>{" "}
            as zsh plugin and{" "}
            <a href="https://github.com/jorcalle11/custom-zsh-themes">
              robbyrussell-modified
            </a>{" "}
            as my custom zsh theme.
          </Item>
          <Item>
            The{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager">
              Project Manager
            </a>{" "}
            extension help me to switch between projects.
          </Item>
          <Item>
            I use{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-esItemnt">
              EsItemnt
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
            I use
            <a href="https://todo.microsoft.com/tasks/">
              Microsoft todo Itemst
            </a>{" "}
            as my daily to-do Itemst.
          </Item>
          <Item>
            <a href="https://trello.com/">Trello</a> is where I organize and
            create cards for my personal and works projects.
          </Item>
          <Item>
            I use <a href="https://www.grammarly.com/">Grammarly</a> to write
            ideas and also to check my texts in order to avoid errors and find
            the perfect words to express me when I need to write in EngItemsh.
          </Item>
          <Item>
            I use <a href="https://www.getpostman.com/">Postman</a> to test APIs
            requests.
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
            8GB of RAM and a NVIDIA GeForce GTX 1650.
          </Item>
          <Item>
            I use <b>Ubuntu</b> as operative system and Windows 10 just for play
            videogames.
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
            <a href="https://www.amazon.com/WALI-Monitor-Adjustable-Capacity-M002/dp/B018MSDG84/ref=sr_1_fkmr0_1?keywords=waItem+dual+monitor+desk+stand+up+to+27&qid=1578782460&sr=8-1-fkmr0">
              WaItem dual monitor desk stand
            </a>{" "}
            to hang my monitors.
          </Item>
          <Item>
            I have a{" "}
            <a href="https://www.amazon.com/gp/product/B071YTQBXM/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1">
              Dell D6000
            </a>{" "}
            universal dock to connect all of my peripherals Itemke mouse,
            keyboard, ethernet with only a single cable running on my machine.
          </Item>
          <Item>
            I use a{" "}
            <a href="https://www.amazon.com/gp/product/B01FXF7HFC/ref=ppx_yo_dt_b_asin_image_o06_s00?ie=UTF8&psc=1">
              E-Element Z-88
            </a>{" "}
            Mechanical Gaming Keyboard.
          </Item>
          <Item>
            I have a{" "}
            <a href="https://www.amazon.com/gp/product/B0043T7FXE/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1">
              Logitech M570
            </a>{" "}
            Wireless Trackball Mouse.
          </Item>
          <Item>
            Desk chair is an{" "}
            <a href="https://www.homecenter.com.co/homecenter-co/product/186683/Silla-Ejecutiva-Cromada-con-Brazos-Negra/186683">
              Asenti Home collection
            </a>
          </Item>
        </ul>
      </Section>
    </Container>
  </Layout>
)

export default Uses
