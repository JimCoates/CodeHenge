import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CodeHengeFlexLogo = ( ) => {

  const { image } = useStaticQuery(graphql`
  query MyQuery {
  image: file(relativePath: {eq: "stonehenge2.png"}) {
    sharp: childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}`)
  return (
    <div className="p-col">
      <Img fluid={image.sharp.fluid}/>
    </div>
  )
}


export default CodeHengeFlexLogo
