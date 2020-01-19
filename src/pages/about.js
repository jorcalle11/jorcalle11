import React from "react"

import Container from "../components/Container"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SEO from "../components/Seo"
import SocialMedia from "../components/SocialMedia"
import Item from "../components/Item"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  flex-flow: column;

  @media (min-width: 768px) {
    flex-flow: row !important;
  }

  div {
    margin-right: 30px;
  }
`

const H4 = styled.h4`
  margin-top: 0;
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <h1>Hi there! 👋</h1>
      <p>
        My name is Jorge Calle, I'm a <b>system engineer</b> and a{" "}
        <b>javascript developer</b> with more than 4 years of experience writing
        code in both frontend and backend side.
      </p>
      <p>
        I'm currently working at{" "}
        <a href="https://condorlabs.io/">Condor labs</a> as a senior backend
        developer, and parallel to my work, I expend my time training and
        learning every day about javascript and technologies such as{" "}
        <b>Node.js</b>, <b>React</b>, <b>Firebase</b> and{" "}
        <b>AWS services</b>.
      </p>
      <p>
        I'm from{" "}
        <a href="https://es.wikipedia.org/wiki/Sahag%C3%BAn_(Colombia)">
          Sahagún (CO)
        </a>
        , I'm a Father, I like sports, watch TV series and football, I like to
        play videogames, read books about technology and also learn new things.
        When I'm not coding or I'm not in front of a screen, it is because I'm
        playing with my little daughter, visiting my family or friends.
      </p>
      <section>
        <h2>Skills</h2>
        <Div>
          <div>
            <H4>Core</H4>
            <ul>
              <Item>Git</Item>
              <Item>Javascript</Item>
              <Item>Unit tests</Item>
              <Item>Functional programing</Item>
            </ul>
          </div>
          <div>
            <H4>Frontend</H4>
            <ul>
              <Item>React</Item>
              <Item>Redux</Item>
              <Item>Styled components</Item>
              <Item>Mobile first and Responsive Design</Item>
            </ul>
          </div>
          <div>
            <H4>Backend</H4>
            <ul>
              <Item>Node.js</Item>
              <Item>Express.js</Item>
              <Item>Mongo DB</Item>
              <Item>MySQL</Item>
              <Item>Firebase</Item>
              <Item>GraphQL</Item>
              <Item>Redis</Item>
              <Item>Microservices</Item>
              <Item>Serverless</Item>
            </ul>
          </div>
        </Div>
      </section>
      <p>
        If you came here only to find what theme, laptop or apps that I use,
        then take a look to my{" "}
        <Link to="/uses" style={{ color: "var(--accentColor)" }}>
          uses
        </Link>{" "}
        page.
      </p>
      <p>
        If you have a question or you would like to get in touch, feel free to
        say hello through any of my social medias or leave me a message in the{" "}
        <Link to="/contact" style={{ color: "var(--accentColor)" }}>
          contact
        </Link>{" "}
        page.
      </p>
      <section style={{ margin: "50px 0" }}>
        <SocialMedia />
      </section>
    </Container>
  </Layout>
)

export default About
