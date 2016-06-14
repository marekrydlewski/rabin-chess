/**
* Default counter
*/
import * as Action from '../actions/actionTypes'

const counter = (state = 666, action) => {
  switch (action.type) {
    case Action.INCREMENT: {
      var newState = state + 1
      return newState
    }
    default:{
      return state
    }
  }
}

export default counter
