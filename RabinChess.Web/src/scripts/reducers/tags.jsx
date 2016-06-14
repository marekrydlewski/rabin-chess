/**
* Default tags
*/
import * as Action from '../actions/actionTypes'

const tags = (state = [], action) => {
  switch (action.type) {
    case Action.CHANGE_CURRENT_TAGS: {
      return action.tags
    }
    default: {
      return state
    }
  }
}

export default tags
