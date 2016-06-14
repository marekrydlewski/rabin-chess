/**
* Default game
*/
import * as Action from '../actions/actionTypes'

const game = (state = 0, action) => {
  switch (action.type) {
    case Action.CHANGE_CURRENT_GAME: {
      return Object.assign({}, state, {
       currentGame: action.game
     });
    }
    default: {
      return state
    }
  }
}

export default game
