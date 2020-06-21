import React from "react"

import Container from "../components/Container"
import Emoji from "../components/Emoji"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SEO from "../components/Seo"

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
          <a href="https://condorlabs.io/">Condor labs</a> as{" "}
          <b>Senior Backend developer</b>.
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
          , I'm a father of a 5 years old girl, I like sports, I like to watch
          football and TV series, I like to play videogames, I like to read
          technical books and also learn new things.
        </p>
        <p>
          When I'm not coding or I'm not in front of a screen, it is because I'm
          playing with my little daughter, visiting my family or friends.
        </p>
      </section>
      <section id="social" style={{ margin: "50px 0" }}>
        <p>
          Interested in my professional profile? Click{" "}
          <Link to="/cv" style={{ color: "var(--accentColor)" }}>
            here
          </Link>{" "}
          to see a summary of my curriculum vitae.
        </p>
        <p>
          If you have any questions or you would like to get in touch, feel free
          to say hello through my social networks or leave me a message on the{" "}
          <Link to="/contact" style={{ color: "var(--accentColor)" }}>
            contact
          </Link>{" "}
          page.
        </p>
      </section>
    </Container>
  </Layout>
)

export default About
