import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"
import { faAws, faReact } from "@fortawesome/free-brands-svg-icons"

const TechIcons = () => {
  return (
    <div className="container add-top-padding add-right-margin">
      <div className="columns is-centered">
        <div className="column is-one-third has-text-centered">
          <FontAwesomeIcon icon={faLeaf} size="8x"/>
        </div>
        <div className="column is-one-third has-text-centered">
          <FontAwesomeIcon icon={faReact} size="8x"/>
        </div>
        <div className="column is-one-third has-text-centered">
          <FontAwesomeIcon icon={faAws} size="8x"/>
        </div>
      </div>
    </div>
  )
}

export default TechIcons
