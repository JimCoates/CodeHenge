import React from "react"
import ProjectCard from "./project-card"
import SubTopicContainer from "./sub-topic-card-container"
import SubTopicIndividualContainer from "./sub-topic-individual"

const ProjectHero = () => {
  return (
    <div className="columns project">
      <div className="column is-one-third">
        <ProjectCard></ProjectCard>
      </div>
      <div className="column">
        <SubTopicContainer></SubTopicContainer>
      </div>
    </div>
  )
}

export default ProjectHero
