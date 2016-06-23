import * as types from '../constants/ActionTypes'

export function addComment(text, parentId) {
  return { type: types.ADD_COMMENT, text, parentId }
}

export function deleteComment(id) {
  return { type: types.DELETE_COMMENT, id }
}

export function voteComment(id) {
	return {type: types.VOTE_COMMENT, id}
}

export function upVoteComment(id) {
	return {type: types.UPVOTE_COMMENT, id}
}