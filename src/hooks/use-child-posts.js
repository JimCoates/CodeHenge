import {graphql, useStaticQuery} from "gatsby"

const useChildPosts = () => {
  const data = useStaticQuery(graphql`
  query {
  allMdx(filter: {frontmatter: {type: {ne: "project"}}}) {
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

export default useChildPosts;
