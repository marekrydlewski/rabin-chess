import '../styles/main_style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import { App, ChessboardLayout, GameListLayout, Dashboard, TestPage } from './components'


let store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ Dashboard }/>
        <Route path="games" component={ GameListLayout } />
        <Route path="board" component={ ChessboardLayout } />
        <Route path="test-page" component={ TestPage } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
