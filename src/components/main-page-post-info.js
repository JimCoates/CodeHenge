import React from "react"
import useParentPosts from "../hooks/use-parent-posts"
import useChildPosts from "../hooks/use-child-posts"
const MainPagePostInfo = () => {

const parentPosts = useParentPosts();
const childPosts = useChildPosts();

  return (
    <>
      {parentPosts.map(post => (
      <pre>{JSON.stringify(post, null, 2)}</pre>
    ))}
      {childPosts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
      </>
  )
}

export default MainPagePostInfo
