import React from "react"
import "../styles/style.scss"

import Layout from "../components/layout"
import Hero from "../components/hero"
import TechIcons from "../components/tech-icons"

import ProjectHero from "../components/project-display.js/project-hero"

const IndexPage = () => (
  <Layout>
    <Hero />
    <TechIcons />
    <h1 className="project-title title is-1"> Projects</h1>
    <ProjectHero />
    <ProjectHero />
    <ProjectHero />
  </Layout>
)

export default IndexPage
