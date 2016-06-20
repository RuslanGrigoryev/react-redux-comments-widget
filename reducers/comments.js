import { ADD_COMMENT, DELETE_COMMENT } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'first comment',
    author: 'john doe',
    id: 0,
    dt: new Date().getHours() + ":" + new Date().getMinutes()
  }
]

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          text: action.text,
          author: 'john doe',
          id: state.reduce((maxId, comment) => Math.max(comment.id, maxId), -1) + 1,
          dt: new Date().getHours() + ":" + new Date().getMinutes()
        }, 
        ...state
      ]

    case DELETE_COMMENT:
      return state.filter(comment =>
        comment.id !== action.id
      )

    default:
      return state
  }
}
