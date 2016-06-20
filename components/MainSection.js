import React, { Component, PropTypes } from 'react'
import CommentItem from './CommentItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { comments, actions } = this.props

    return (
      <section className="main">
        <h1>Comments List:</h1>
        <ul>
          {comments.map(comment =>
            <CommentItem key={comment.id} comment={comment} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
