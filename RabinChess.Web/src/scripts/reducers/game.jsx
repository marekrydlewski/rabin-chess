/**
* Default game
*/
import * as Action from '../actions/actionTypes'

const game = (state = '', action) => {
  switch (action.type) {
    case Action.CHANGE_CURRENT_GAME: {
      return action.game
    }
    default: {
      return state
    }
  }
}

export default game
