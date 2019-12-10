import React from "react"
import temp from "../../images/stonehenge2.png"
import ProjectHero from "./project-hero"

const ProjectCard = ({post}) => {
  return (
    <div class="card">
      <div class="card-image is-marginless">
        <figure class="image is-4x3">
          <img src={post.img} alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              {post.description}
            </p>
          </div>
        </div>

        <div class="content">
          And while she looked so sad in photographs I aboslutely lover her,
          when she smiles, when she smiles, Lorem ipsum dolor sit amet,
          <br />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
