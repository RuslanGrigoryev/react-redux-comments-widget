import React, { PropTypes, Component } from 'react'

class Form extends Component {

	constructor(props, context) {
	  super(props, context)
	  this.state = {
	    text: ''
	  }
	}

	handleAddComment (e) {
		e.preventDefault();
		if (this.state.text !== '') {
			this.props.addComment(this.state.text);
			this.setState({
				text: ''
			});
			this.refs.addCommentInput.focus();
		}
	}

	handleChange (e) {
		this.setState({
			text: e.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.handleAddComment.bind(this)}>
				<textarea 
					rows="5" 
					cols="50"
					value={this.state.text}
					autofocus="true"
					ref="addCommentInput"
					onChange={this.handleChange.bind(this)}
					placeholder="Type new comment."></textarea>
				<p><button type="submit">Add comment</button></p>
			</form>
		)
	}
}

export default Form
