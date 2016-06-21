import React, { Component, PropTypes } from 'react'
require("./Comment.scss");
import CommentItem from './CommentItem'

class CommentList extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { comments, actions } = this.props;

		if (comments !== undefined && comments.length) {
				return (
					<section className="r-comments">
						<ul className="r-comments__list">
							{comments.map(comment =>
								<CommentItem key={comment.id} comment={comment} actions={actions} />
							)}
						</ul>
					</section>
			)
		} else {
			return (
				<div>Пусто</div>
			);
		}


  }
}

CommentList.propTypes = {
	comments: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default CommentList
