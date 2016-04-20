import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  DevTools.instrument(),
);

/**
* Development version of function configuring store with root reducer and optional inital state for use with Redux DevTools.
* @param  [initialState] Inital store state
* @returns Application store
*/
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
