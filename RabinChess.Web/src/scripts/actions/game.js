import * from './actionTypes'

export function changeGame(game) {
  return { type: CHANGE_CURRENT_GAME, game }
}