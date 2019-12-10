import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import TechIcons from "../components/tech-icons"
import MainPagePostInfo from "../components/main-page-post-info"

const IndexPage = () => <Layout>
  <Hero/>
  <TechIcons/>
  <MainPagePostInfo/>
</Layout>

export default IndexPage
