import { combineReducers } from 'redux'
import counter from './counter'
import currentGame from './game'

/**
* Root reducer for RabinChess
*/
const reducer = combineReducers({counter, currentGame})

export default reducer
