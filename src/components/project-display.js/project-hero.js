import React from "react"
import ProjectCard from "./project-card"
import SubTopicContainer from "./sub-topic-card-container"
import useParentPosts from "../../hooks/use-parent-posts"
import useChildPosts from "../../hooks/use-child-posts"

const ProjectHero = () => {

  const parentPosts = useParentPosts();
  const childPosts = useChildPosts();

  return (
    <div className="columns project">
      <div className="column is-one-third">
        <ProjectCard post={parentPosts[0]}/>
      </div>
      <div className="column">
        <SubTopicContainer posts={childPosts}/>
      </div>
    </div>
  )
}

export default ProjectHero
