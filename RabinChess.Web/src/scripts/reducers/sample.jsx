/**
* Default counter
*/
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      var newState = state + 1
      return newState
    }
    default:{
      return state
    }
  }
}

export default counter
