import expect from 'expect'
import comments from '../../reducers/comments'
import * as types from '../../constants/ActionTypes'

describe('comments reducer', () => {
  it('should handle initial state', () => {
    expect(
      comments(undefined, {})
    ).toEqual([
      {
        text: 'first comment',
        author: 'john doe',
        id: 0,
        dt: new Date().getHours() + ":" + new Date().getMinutes()
      },
      {
        text: 'second comment',
        author: 'john doe',
        id: 1,
        dt: new Date().getHours() + ":" + new Date().getMinutes()
      }
    ])
  })

  it('should handle ADD_COMMENT', () => {
    expect(
      comments([], {
        type: types.ADD_COMMENT,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        author: 'john doe',
        id: 0,
        dt: new Date().getHours() + ":" + new Date().getMinutes()
      }
    ])

    expect(
      comments([
        {
          text: 'First Comment',
          author: 'john doe',
          id: 0,
          dt: new Date().getHours() + ":" + new Date().getMinutes()
        }
      ], {
        type: types.ADD_COMMENT,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
          author: 'john doe',
          id: 1,
          dt: new Date().getHours() + ":" + new Date().getMinutes()
      }, {
        text: 'First Comment',
          author: 'john doe',
          id: 0,
          dt: new Date().getHours() + ":" + new Date().getMinutes()
      }
    ])
  })

  it('should handle DELETE_COMMENT', () => {
    expect(
      comments([
        {
          text: 'Run the tests',
          id: 1
        }, {
          text: 'First Comment',
          id: 0
        }
      ], {
        type: types.DELETE_COMMENT,
        id: 1
      })
    ).toEqual([
      {
        text: 'First Comment',
        id: 0
      }
    ])
  })


})
