import { IState, IAction } from "./types"
import { combineReducers } from 'redux'

function shared(state: IState = {}, action: IAction) {
  return state
}

const rootReducer = {
  shared,
}

export default combineReducers<IState, IAction>(rootReducer)