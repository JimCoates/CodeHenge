import {graphql, useStaticQuery} from "gatsby"

const useScrappyChildren = () => {
  const data = useStaticQuery(graphql`
  query {
  allMdx(filter: {frontmatter: {type: {ne: "project"}, parents: {regex: "/Scrappy App/"}}}) {
    nodes {
      frontmatter {
        author
        title
        date
        img
        description
      }
    }
  }
}
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    date: post.frontmatter.date,
    img: post.frontmatter.img,
    description: post.frontmatter.description
  }))
}

export default useScrappyChildren;
