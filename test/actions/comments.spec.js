import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import * as actions from '../../actions'

describe('comment actions', () => {
  it('addComment should create ADD_COMMENT action', () => {
    expect(actions.addComment('First Comment')).toEqual({
      type: types.ADD_COMMENT,
      text: 'First Comment'
    })
  })

  it('deleteComment should create DELETE_COMMENT action', () => {
    expect(actions.deleteComment(1)).toEqual({
      type: types.DELETE_COMMENT,
      id: 1
    })
  })

})
