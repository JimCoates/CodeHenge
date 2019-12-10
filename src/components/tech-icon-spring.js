import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TechIconSpring = () => {

  const { image } = useStaticQuery(graphql`
  query {
  image: file(relativePath: {eq: "spring-glow.png"}) {
    sharp: childImageSharp {
      fixed(width: 132, height: 125){
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

export default TechIconSpring
