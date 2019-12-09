import React from "react"
import BackgroundImage from 'gatsby-background-image'
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

const ImageBackground = styled(BackgroundImage)`
background-position: right top;
background-size:50%;
height: 90vh;

+ * {
margin-top: 0;
}
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
  query {
  image: file(relativePath: {eq: "stonehenge2.png"}) {
    sharp: childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}`)

  return (
    <ImageBackground fluid={image.sharp.fluid}>
      <div className="">
      <div className="p-grid">
        <div className="p-col-6">
          <h1>hi</h1>
        </div>
      </div>
      </div>
    </ImageBackground>
  )
}

export default Hero
