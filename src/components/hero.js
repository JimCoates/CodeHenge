import React from "react"
import BackgroundImage from 'gatsby-background-image'
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

const ImageBackground = styled(BackgroundImage)`
background-position: right top;
background-size:50%;
height: 80vh;

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
    <ImageBackground className="add-top-margin" fluid={image.sharp.fluid}>
      <section className="hero is-medium">
        <div className="hero-body">
      <div className="container">
      <div className="columns">
        <div className="column is-half">
          <div className='title is-1'>
            A blog containing KSM career development projects
          </div>
          <div className="subtitle is-3">
            With a focus on Springboot and React
          </div>
        </div>

      </div>
      </div>
        </div>
      </section>
    </ImageBackground>
  )
}

export default Hero
