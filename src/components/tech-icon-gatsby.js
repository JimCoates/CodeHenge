import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TechIconGatsby = () => {

  const { image } = useStaticQuery(graphql`
  query {
  image: file(relativePath: {eq: "gatsby-glow6.png"}) {
    sharp: childImageSharp {
      fixed(width: 125, height: 125){
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

export default TechIconGatsby
