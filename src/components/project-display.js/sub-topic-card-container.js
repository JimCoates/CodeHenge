import React from "react"
import ProjectCard from "./project-card"
import SubTopicCard from "./sub-topic-card"

const SubTopicContainer = () => {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile is-parent ">
          <article class="tile is-child notification is-gatsby-link is-white">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">Content</div>
          </article>
        </div>
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-white is-spring-link">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-react-link is-white">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-gatsby-link is-white">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">Content</div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default SubTopicContainer
