import React, { Component, PropTypes } from 'react'

class Comment extends Component {

	constructor(props, context) {
		super(props, context)
	}

	render () {

		const {comment, deleteComment} = this.props;
		return (
			<li>
				<p><strong>Author: </strong>{comment.author}</p>
				<p><strong>Text: </strong>{comment.text}</p>
				<p><strong>Time: </strong>{comment.dt}</p>
				<p><button 
						onClick={() => deleteComment(comment.id)}>Delete</button></p>
			</li>
		);
	}
};

export default Comment