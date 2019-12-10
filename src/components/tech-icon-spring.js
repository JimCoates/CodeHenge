import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TechIconSpring = () => {

  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover( true );
  }
  const handleMouseLeave = () => {
    setHover(false );
  }

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
    <div className="column is-one-third has-text-centered" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Img fixed={image.sharp.fixed}/>
    </div>
  )
}

export default TechIconSpring
