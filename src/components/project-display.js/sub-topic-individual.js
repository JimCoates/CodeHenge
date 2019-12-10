import React from "react"
import SubTopicCard from "./sub-topic-card"

const SubTopicIndividualContainer = () => {
  return (
    <div className="columns">
      <div className="column is-two-fifths">
        <SubTopicCard></SubTopicCard>
      </div>
      <div className="column is-two-fifths">
        <SubTopicCard></SubTopicCard>
      </div>
    </div>
  )
}

export default SubTopicIndividualContainer
