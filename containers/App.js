import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'
import * as CommentActions from '../actions'

class App extends Component {
  render() {
    const { comments, actions } = this.props;

    return (
      <div id="r-comments">
        <CommentList comments={comments} actions={actions} />
        <CommentForm addComment={actions.addComment} />
      </div>
    )
  }
}

App.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CommentActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
