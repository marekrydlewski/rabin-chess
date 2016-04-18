import '../styles/main_style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index.jsx'
import configureStore from './store/configureStore'

import App from './components/App.jsx'
import ChessboardLayout from './components/chessboard_layout'

let store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <Route path="board" component={ ChessboardLayout } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
