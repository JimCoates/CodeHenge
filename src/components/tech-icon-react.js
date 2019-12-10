import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TechIconReact = () => {

  const { image } = useStaticQuery(graphql`
  query {
  image: file(relativePath: {eq: "react-glow.png"}) {
    sharp: childImageSharp {
      fixed(width: 150, height: 125){
        ...GatsbyImageSharpFixed
      }
    }
  }
}`)
  return (
    <div className="column is-one-third has-text-centered">
      <Img fixed={image.sharp.fixed}/>
    </div>
  )
}

export default TechIconReact
