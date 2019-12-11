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
        <div className="column is-one-third is-gapless">
          <div className="card ">
            <div className="card-image has-text-centered">
              <figure className="image is-inline-block card-sized">
                <img src={post.img}></img>
              </figure>
            </div>
            <div className="card-content">
              <h1 className="title"> {post.title}</h1>
            </div>
          </div>
        </div>
      ))}
      <div className="column has-text-centered is-one-third">
        <div className="vertical-center">
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            size="8x"
            color="#6b6c6a"
          />
        </div>
      </div>
    </div>
  )
}

export default SubTopicContainer
