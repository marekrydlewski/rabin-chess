import * as Action from './actionTypes'

export function changeTags(tags) {
  return { type: Action.CHANGE_CURRENT_TAGS, tags }
}
