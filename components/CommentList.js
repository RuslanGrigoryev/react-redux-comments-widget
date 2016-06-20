import React, { Component, PropTypes } from 'react'
require("./Comment.scss");
import CommentItem from './CommentItem'

class CommentList extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { comments, actions } = this.props

    return (
      <section className="r-comments">
        <h3 className="r-comments__header">Comments List:</h3>
        <ul className="r-comments__list">
          {comments.map(comment =>
            <CommentItem key={comment.id} comment={comment} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default CommentList
