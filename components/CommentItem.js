import React, { Component, PropTypes } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'


class CommentItem extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			answering: false
		};
	}

	showAddForm () {
		this.setState({
			answering: true
		});
	}

	render () {
		const {comment, actions} = this.props;
		let innerComments = comment.children !== undefined && comment.children.length ? <CommentList comments={comment.children} actions={actions} /> : '';
		let innerForm = this.state.answering ? <CommentForm addComment={actions.addComment} parentId={comment.id} /> : '';

		return (
			<li className="r-comments__item">
				<p><strong>Id: </strong> {comment.id}</p>
				<p><strong>Author: </strong>{comment.author}</p>
				<p><strong>Text: </strong>{comment.text}</p>
				<p><strong>Time: </strong>{comment.dt}</p>
				<p><button 
						onClick={() => actions.deleteComment(comment.id)}>Delete</button>
					<button
						onClick={this.showAddForm.bind(this)}>Ответить</button>
				</p>

				{innerForm}

				{innerComments}

			</li>
		);
	}
};

export default CommentItem