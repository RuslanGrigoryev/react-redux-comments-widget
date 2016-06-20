import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../components/Form'
import MainSection from '../components/MainSection'
import * as CommentActions from '../actions'

class App extends Component {
  render() {
    const { comments, actions } = this.props;

    return (
      <div>
        <MainSection comments={comments} actions={actions} />
        <Form addComment={actions.addComment} />
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
