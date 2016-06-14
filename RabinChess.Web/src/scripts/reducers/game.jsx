/**
* Default game
*/
const game = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_GAME': {
      return Object.assign({}, state, {
       currentGame: action.game
     });
    }
    default:{
      return state
    }
  }
}

export default game
