import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Emoji from "../components/Emoji"
import Container from "../components/Container"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <h1>Hey, I'm Jorge</h1>
      <p>
        I'm a <b>Javascript developer</b> from{" "}
        <a href="https://es.wikipedia.org/wiki/Sahag%C3%BAn_(Colombia)">
          Sahagún
        </a>
        , Córdoba. I have been writing code for around 5 years in both front-end
        and back-end side.
      </p>
      <p>
        I'm a system enginner from the{" "}
        <a href="https://www.unicordoba.edu.co">Universidad de Córdoba</a> and I
        have been working at <a href="https://condorlabs.io/">Condor labs</a> as
        a <b>Backend Developer</b> for around 3 years.
      </p>
      <p>
        I like to learn new things and be informed of everything new that the
        world of web development has to offer. I usually try to put into
        practice what I have learned in order to improve my workflow and be more
        productive. Also, I like to listen music and watch tv series on Netflix
        and thanks to that, I've been able to improve my English skills.{" "}
        <Emoji label="victory" children="✌️" />
      </p>
      <p>
        When I'm not in front of a screen, I love to spend my time with my
        little daughter, family and friends.
      </p>
      <section>
        <h3>Skills</h3>
        <div>
          <p>Front-end</p>
          <ul>
            <li>HTML</li>
            <li>CSS fraweworks (Bootstrap, Materialize)</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>firebase</li>
            <li>Styled components</li>
          </ul>
        </div>
        <div>
          <p>Back-end</p>
          <ul>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Express/Hapi.js</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Serverless</li>
            <li>AWS</li>
          </ul>
        </div>
      </section>
      <p>
        If you have a question about me or if you’d like to get in touch, feel
        free to say hello through any of the social links.
      </p>
    </Container>
  </Layout>
)

export default About
