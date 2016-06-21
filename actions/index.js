import * as types from '../constants/ActionTypes'

export function addComment(text, parentId) {
  return { type: types.ADD_COMMENT, text, parentId }
}

export function deleteComment(id) {
  return { type: types.DELETE_COMMENT, id }
}
