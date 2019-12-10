import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"
import { faAws, faReact } from "@fortawesome/free-brands-svg-icons"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import TechIconSpring from "./tech-icon-spring"
import TechIconReact from "./tech-icon-react"
import TechIconGatsby from "./tech-icon-gatsby"

const TechIcons = () => {

  const { image } = useStaticQuery(graphql`
  query {
  image: file(relativePath: {eq: "gatsby-icon.png"}) {
    sharp: childImageSharp {
      fixed(width: 125, height: 125){
        ...GatsbyImageSharpFixed
      }
    }
  }
}`)
  return (
    <div className="container add-top-padding-small add-right-margin-large">
      <div className="columns is-centered">
        <TechIconSpring/>
        <TechIconReact/>
        <TechIconGatsby/>
      </div>
    </div>
  )
}

export default TechIcons
