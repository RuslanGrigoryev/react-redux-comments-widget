import { ADD_COMMENT, DELETE_COMMENT } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'first comment',
    author: 'john doe',
    id: 1,
    dt: new Date().getHours() + ":" + new Date().getMinutes(),
    children: []
  }, {
    text: 'second comment',
    author: 'john doe',
    id: 2,
    dt: new Date().getHours() + ":" + new Date().getMinutes(),
    children: []
  }
]

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:

      var id = 0,
          idCount = function getIdFromSumOfObjects (state) {
          if (state.length) {
              for (var i = 0; i < state.length; i++) {
                  id++;
                  if (state[i].children !== undefined && state[i].children.length !== 0) {
                       getIdFromSumOfObjects(state[i].children);
                  }
              }
          }
          return id;
      }(state);

      var temp = {
            text: action.text,
            author: 'john doe',
            id: idCount + 1,
            dt: new Date().getHours() + ":" + new Date().getMinutes(),
            parentId: action.parentId,
            children: []
          },
          tempState = [...state],
          child = false;

      return function getCommentsTree (arr, parentId) {
        if (arr.length) {
          for (var i = 0; i < arr.length; i++) {
              if (arr[i].id === parentId) {
                arr[i].children.push(temp);
                child = true;
              } else {
                if (arr[i].children !== undefined && arr[i].children.length !== 0) {
                  getCommentsTree(arr[i].children, parentId);
                }
              }
          }
          return arr;
        }

        if (!child) {
          return [
            temp,
            ...state
          ]
        }
      }(tempState, action.parentId);

    case DELETE_COMMENT:
      return state.filter(comment =>
        comment.id !== action.id
      )

    default:
      return state
  }
}
