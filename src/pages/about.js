import React from "react"
import styled from "styled-components"

import Container from "../components/Container"
import Emoji from "../components/Emoji"
import Item from "../components/Item"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SEO from "../components/Seo"
import SocialMedia from "../components/SocialMedia"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <section id="aboutme">
        <h1>
          Hi there! <Emoji label="greeting" children="👋" />
        </h1>
        <p>
          My name is Jorge Calle, I'm a <b>System Engineer</b> and a{" "}
          <b>JavaScript developer</b>. I currently work at{" "}
          <a href="https://condorlabs.io/">Condor labs</a> as Senior Backend
          developer. I have been there for 3 years.
        </p>
        <p>
          At the same time, I dedicate part of my time to continue training and
          learning every day about JavaScript and other technologies such as{" "}
          <b>Node.js</b>, <b>Firebase</b>, <b>React</b> and <b>GraphQL</b>.
        </p>
        <p>
          I have been writing code for 5 years and I hope to continue doing it
          for a long time <Emoji label="smiling-face" children="😊" />. I enjoy
          creating web applications and automating tasks that I regularly do
          over and over again.
        </p>
        <p>
          I'm from{" "}
          <a href="https://es.wikipedia.org/wiki/Sahag%C3%BAn_(Colombia)">
            Sahagún
          </a>
          , I'm a father of a 5 years old girl, I Itemke sports, I Itemke to
          watch football and TV series, I Itemke to play videogames, I Itemke to
          read technical books and also learn new things.
        </p>
        <p>
          When I'm not coding or I'm not in front of a screen, it is because I'm
          playing with my Itemttle daughter, visiting my family or friends.
        </p>
      </section>
      <section id="skills">
        <SectionTitle>Skills</SectionTitle>
        <Skill
          title="Frontend Development"
          items={["React", "Redux", "CSS in Js", "Styled Components"]}
        />
        <Skill
          title="Backend Development"
          items={[
            "Node.js",
            "Serverless",
            "Microservices",
            "Express",
            "MongoDB",
            "SQL",
            "Redis",
            "Firebase",
            "GraphQL",
          ]}
        />
        <Skill title="Languages" items={["JavaScript"]}></Skill>
      </section>
      <section id="experience">
        <SectionTitle>Experience</SectionTitle>
        <Experience company="Condor Labs">
          <Ul>
            <Item>
              Backend Developer <Period>March 2018 - Current</Period>
            </Item>
            <Item>
              Frontend Developer <Period>Jul 2017 - Feb 2018</Period>
            </Item>
            <Item>
              Software Enginner <Period>Jan 2017 - June 2017</Period>
            </Item>
          </Ul>
        </Experience>
        <Experience company="Domoti S.A.S">
          <Ul>
            <Item>
              Frontend Developer <Period>Aug 2016 - Dec 2016</Period>
            </Item>
          </Ul>
        </Experience>
      </section>
      <section id="social" style={{ margin: "50px 0" }}>
        <p>
          If you have any questions or you would like to get in touch, feel free
          to say hello through my social networks or leave me a message on the{" "}
          <Link to="/contact" style={{ color: "var(--accentColor)" }}>
            contact
          </Link>{" "}
          page.
        </p>
        <SocialMedia />
      </section>
    </Container>
  </Layout>
)

function Skill({ title, items = [] }) {
  return (
    <div>
      <H3>{title}</H3>
      <P>{items.join(", ")}</P>
    </div>
  )
}

function Experience({ company, children }) {
  return (
    <div>
      <H3>{company}</H3>
      {children}
    </div>
  )
}

const SectionTitle = styled.h2`
  margin-top: 40px;
`

const H3 = styled.h3`
  margin-bottom: 0;
`

const P = styled.p`
  margin-top: 0;
`

const Period = styled.span`
  color: var(--secondaryText);
  font-size: 1rem;
  margin-left: 25px;
`

const Ul = styled.ul`
  margin: 0;
  padding-left: 20px;
`

export default About
