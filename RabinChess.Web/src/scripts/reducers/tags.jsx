/**
* Default tags
*/
import * as Action from '../actions/actionTypes'

const pgnHeaders = ['[Event "Fischer - Spassky World Championship Match"]',
    '[Site "Reykjavik ISL"]',
    '[Date "1972.07.16"]',
    '[EventDate "?"]',
    '[Round "3"]',
    '[Result "0-1"]',
    '[White "Boris Spassky"]',
    '[Black "Robert James Fischer"]',
    '[ECO "A61"]',
    '[WhiteElo "?"]',
    '[BlackElo "?"]',
    '[PlyCount "82"]'];

const tags = (state = pgnHeaders, action) => {
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
