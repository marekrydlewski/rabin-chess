import * as Action from './actionTypes'

export function changeGame(game) {
  return { type: Action.CHANGE_CURRENT_GAME, game }
}
