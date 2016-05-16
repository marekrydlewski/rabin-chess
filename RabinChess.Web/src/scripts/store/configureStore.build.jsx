import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

/**
* Production version of function configuring store with root reducer and optional inital state.
* @param [initialState] Inital store state
* @returns Application store
*/
export default function configureStore(initialState) {
  return createStore(reducer, applyMiddleware(thunk), initialState);
};
