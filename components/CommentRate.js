import React, { Component } from 'react'

class CommentRate extends Component {
	constructor (props, context) {
		super(props, context);
	}

	render () {
		const {comment, actions} = this.props
		return (
			<div className="r-comments__rate">
				<span 
					className="rate rate_vote"
					onClick={() => actions.voteComment(comment.id)}>+</span>
				<span className="rate rate_current">{this.props.comment.rating}</span>
				<span 
					className="rate rate_upvote"
					onClick={() => actions.upVoteComment(comment.id)}>-</span>
			</div>
		);
	}
}

export default CommentRate