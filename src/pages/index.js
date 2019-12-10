import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TechIcons from "../components/tech-icons"

import ProjectHero from "../components/project-display.js/project-hero"

const IndexPage = () => (
  <Layout>
    <Hero />
    <TechIcons />
    <ProjectHero></ProjectHero>
    <ProjectHero></ProjectHero>
    <ProjectHero></ProjectHero>
  </Layout>
)

export default IndexPage
