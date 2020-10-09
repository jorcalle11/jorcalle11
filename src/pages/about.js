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
          My name is Jorge Calle. I am a <strong>System engineer</strong> and a{" "}
          <strong>Javascript developer</strong>. I have been writing code for
          about 4 years, I hope to keep doing it for a long time{" "}
          <Emoji label="smiling-face" children="😊" />. I'm currently working at{" "}
          <a href="https://jobbatical.com/">Jobbatical</a> as a{" "}
          <strong>Full Stack developer</strong>.
        </p>
        <p>
          At the same time, I dedicate part of my time to continue training and
          learning every day about <strong>JavaScript</strong> and other
          technologies such as <strong>Node.js</strong>,{" "}
          <strong>Firebase</strong>, <strong>React</strong>, and{" "}
          <strong>GraphQL</strong>. My favorite platforms to take online courses
          are <a href="https://www.pluralsight.com">Pluralsight</a>,{" "}
          <a href="https://www.egghead.io">Egghead</a>, and{" "}
          <a href="https://www.udemy.com">Udemy</a>.
        </p>
        <p>
          Born and raised in{" "}
          <a href="https://es.wikipedia.org/wiki/Sahag%C3%BAn_(Colombia)">
            Sahagún
          </a>
          , I moved to Cartagena(CO) a few years ago to begin my professional
          career at Condor Labs. But when I have the opportunity (Holidays) or
          just want to relax, I travel back to Sahagún, because for me, it is
          the best place where I can rest{" "}
          <Emoji label="winking-face-with-tongue" children="😜" />.
        </p>
        <p>
          I am a father of a 5 years old girl. I like to play and watch soccer,
          watch TV series, and play videogames. When I am not coding or in front
          of a screen, it is because I am playing with my daughter, visiting my
          family or friends.
        </p>
        <p>
          Are you interested in seeing my professional profile? Click{" "}
          <Link to="/cv" style={{ color: "var(--accentColor)" }}>
            here
          </Link>{" "}
          to see my resume.
        </p>
        <p>
          If you have any questions or you would like to get in touch with me,
          feel free to say hello on my social networks or leave me a message on
          the{" "}
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
