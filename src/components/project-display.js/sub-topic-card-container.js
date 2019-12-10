import React from "react"

const SubTopicContainer = ({posts}) => {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile is-parent ">
          <article class="tile is-child notification is-gatsby-link is-white">
            <p class="title">{posts[0].title}</p>
            <p class="subtitle">{posts[0].author}</p>
            <div class="content">Content</div>
          </article>
        </div>
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-white is-spring-link">
              <p class="title">{posts[1].title}</p>
              <p class="subtitle">{posts[1].author}</p>
              <figure class="image is-4by3">
                <img src={posts[1].img} alt="no img available"/>
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-react-link is-white">
              <p class="title">{posts[2].title}</p>
              <p class="subtitle">{posts[2].author}</p>
              <figure class="image is-4by3">
                <img src={posts[2].img} alt="no img available"/>
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
