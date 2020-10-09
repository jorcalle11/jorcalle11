import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import Item from "../components/Item"

export default function CV({ username }) {
  return (
    <Layout>
      <SEO title="cv" />
      <Container>
        <Section id="header">
          <H1>Jorge Calle</H1>
          <P>System Engineer, Full stack developer</P>
          <ContactInformation>
            <ContactItem>
              <strong>Email: </strong>
              <a href="mailto:hi@jorgecalle.co">hi@jorgecalle.co</a>
            </ContactItem>
            <Space />
            <ContactItem>
              <strong>Github: </strong>
              <a href={`https://www.github.com/${username}`}>{username}</a>
            </ContactItem>
            <Space />
            <ContactItem>
              <strong>Twitter: </strong>
              <a href={`https://www.twitter.com/${username}`}>{username}</a>
            </ContactItem>
          </ContactInformation>
        </Section>
        <Section id="skills">
          <h2>Skills</h2>
          <Skill
            title="Frontend"
            items={["React", "Redux", "Styled Components"]}
          />
          <Skill
            title="Backend"
            items={[
              "Node.js",
              "Express.js",
              "MongoDB",
              "Redis",
              "SQL",
              "Firebase",
              "Docker",
              "GraphQL",
            ]}
          />
          <Skill title="DevOps" items={["Ansible", "AWS"]} />
          <Skill title="Languages" items={["JavaScript"]}></Skill>
        </Section>
        <Section id="experience">
          <h2>Experience</h2>
          <ExperienceItem>
            <div>
              <P>
                <strong>Jobbatical</strong>, Tallinn, Estonia -{" "}
                <Position>Software Developer</Position>
              </P>
              <P>
                <Period>October 2020 - Current</Period>
              </P>
            </div>
          </ExperienceItem>
          <ExperienceItem>
            <div>
              <P>
                <strong>Condor Labs</strong>, Cartagena(CO) -{" "}
                <Position>Senior Backend Developer</Position>
              </P>
              <P>
                <Period>January 2017 - September 2020</Period>
              </P>
            </div>
            <ul>
              <Item>
                Participated in the migration from a monolithic application
                (ASP.NET + Oracle DB) to a microservice based infrastructure
                (MERN stack) of one of our products.
              </Item>
              <Item>
                Developed CLI Applications with Node.js to automate daily client
                special requests.
              </Item>
              <Item>
                Implemented configuration management with ansible to track
                changes made on servers and maintain consistency between
                environments.
              </Item>
              <Item>Automated deployments in amazon EC2 with ansible.</Item>
            </ul>
          </ExperienceItem>
          <ExperienceItem>
            <div>
              <P>
                <strong>Domoti S.A.S</strong>, Bogotá(CO) -{" "}
                <Position>Frontend developer</Position>
              </P>
              <P>
                <Period>August 2016 - December 2016</Period>
              </P>
            </div>
            <ul>
              <Item>Developed web applications with Angular 1</Item>
            </ul>
          </ExperienceItem>
        </Section>
        <Section>
          <h2>Languages</h2>
          <div>
            <p>Spanish (Native)</p>
            <p>English (B1)</p>
          </div>
        </Section>
      </Container>
    </Layout>
  )
}

CV.defaultProps = {
  username: "jorcalle11",
}

const Section = styled.section`
  margin-top: 40px;
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }
`
const H1 = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0px;
`
const P = styled.p`
  margin: 0px auto;
`
const Space = styled.div`
  width: 2rem;
`
const H3 = styled.h3`
  margin-bottom: 0;
`
const ExperienceItem = styled.div`
  padding-bottom: 1rem;
`
const Span = styled.span`
  color: var(--secondaryText);
`
const Period = styled(Span)`
  font-size: 1rem;
`
const ContactInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Position = styled.span`
  font-style: italic;
`
const ContactItem = styled.div`
  padding: 0.5rem 0px;
`
function Skill({ title, items = [] }) {
  return (
    <div>
      <H3>{title}</H3>
      <Span>{items.join(", ")}</Span>
    </div>
  )
}
