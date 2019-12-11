import React from "react"

const ProjectCard = ({ post }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image ">
          <img src={post.img} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{post.description}</p>
          </div>
        </div>

        <div className="content">
          And while she looked so sad in photographs I aboslutely lover her,
          when she smiles, when she smiles, Lorem ipsum dolor sit amet,
          <br />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
