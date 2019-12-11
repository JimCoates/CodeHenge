import React from "react"
import "../styles/style.scss"

import Layout from "../components/layout"
import Hero from "../components/hero"
import TechIcons from "../components/tech-icons"

import ProjectHero from "../components/project-display.js/project-hero"
import MainPagePostInfo from "../components/main-page-post-info"
import useParentPosts from "../hooks/use-parent-posts"
import useChildPosts from "../hooks/use-child-posts"
import useCodehengeChildren from "../hooks/use-codehenge-children"
import useProjyesChildren from "../hooks/use-projyes-children"
import useScrappyChildren from "../hooks/use-scrappy-children"

const IndexPage = () => {

    const parentPosts = useParentPosts();
    const codehengePosts = useCodehengeChildren();
    const projyesPosts = useProjyesChildren();
    const scrappyPosts = useScrappyChildren()

    return (
      <Layout>
          <Hero/>
          <TechIcons/>
          <h1 className="project-title title is-1"> Projects</h1>
          <MainPagePostInfo/>
          <ProjectHero project={parentPosts[0]} childPosts={codehengePosts}/>
          <ProjectHero project={parentPosts[1]} childPosts={projyesPosts}/>
          <ProjectHero project={parentPosts[2]} childPosts={scrappyPosts}/>
      </Layout>
    )
}

export default IndexPage
