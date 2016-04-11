import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
