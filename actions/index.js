import * as types from '../constants/ActionTypes'

export function addComment(text) {
  return { type: types.ADD_COMMENT, text }
}

export function deleteComment(id) {
  return { type: types.DELETE_COMMENT, id }
}
