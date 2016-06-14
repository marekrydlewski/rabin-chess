import { combineReducers } from 'redux'
import counter from './sample'
import currentGame from './game'

/**
* Root reducer for RubinChess
*/
const reducer = combineReducers({counter})

export default reducer
