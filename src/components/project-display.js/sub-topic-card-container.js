import React, { useState, useEffect } from "react"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SubTopicContainer = ({ posts }) => {
  const [displayedTopics, setDisplayedTopics] = useState([])

  useEffect(() => {
    var tempArray = []
    for (let index = 0; index < 5; index++) {
      tempArray.push = posts[index]
    }
    setDisplayedTopics(tempArray)
  }, [])

  return (
    <div className="columns is-multiline">
      {posts.map(post => (
        <div className="column is-one-third">
          <div className="card">
            <h1 className="title"> {post.title}</h1>
          </div>
        </div>
      ))}
      <div className="column has-text-centered is-one-third">
        <FontAwesomeIcon icon={faArrowCircleRight} size="8x" color="#6b6c6a" />
      </div>
    </div>
    // <div className="tile is-ancestor">
    //   <div className="tile is-vertical is-8">
    //     <div className="tile is-parent ">
    //       <article className="tile is-child notification is-gatsby-link is-white">
    //         <p className="title">{posts[0].title}</p>
    //         <p className="subtitle">{posts[0].author}</p>
    //         <div className="content">Content</div>
    //       </article>
    //     </div>
    //     <div className="tile">
    //       <div className="tile is-parent is-vertical">
    //         <article className="tile is-child notification is-white is-spring-link">
    //           <p className="title">{posts[1].title}</p>
    //           <p className="subtitle">{posts[1].author}</p>
    //           <figure className="image is-4by3">
    //             <img src={posts[1].img} alt="no img available" />
    //           </figure>
    //         </article>
    //       </div>
    //       <div className="tile is-parent">
    //         <article className="tile is-child notification is-react-link is-white">
    //           <p className="title">{posts[2].title}</p>
    //           <p className="subtitle">{posts[2].author}</p>
    //           <figure className="image is-4by3">
    //             <img src={posts[2].img} alt="no img available" />
    //           </figure>
    //         </article>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="tile is-parent">
    //     <article className="tile is-child notification is-gatsby-link is-white">
    //       <div className="content">
    //         <p className="title">Tall tile</p>
    //         <p className="subtitle">With even more content</p>
    //         <div className="content">Content</div>
    //       </div>
    //     </article>
    //   </div>
    // </div>
  )
}

export default SubTopicContainer
