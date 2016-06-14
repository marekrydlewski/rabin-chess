import { combineReducers } from 'redux'
import counter from './counter'
import currentGame from './game'
import currentTags from './tags'

/**
* Root reducer for RabinChess
*/
const reducer = combineReducers({counter, currentGame, currentTags})

export default reducer
