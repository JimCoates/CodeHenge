import React from "react"
import TechIconSpring from "./tech-icon-spring"
import TechIconReact from "./tech-icon-react"
import TechIconGatsby from "./tech-icon-gatsby"

const TechIcons = () => {

  return (
    <div className="container add-top-padding-small add-right-margin-large add-bottom-margin">
      <div className="columns is-centered">
        <TechIconSpring />
        <TechIconReact />
        <TechIconGatsby />
      </div>
    </div>
  )
}

export default TechIcons
