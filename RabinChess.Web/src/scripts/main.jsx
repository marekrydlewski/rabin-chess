import '../styles/main_style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import App from './components/App.jsx'
import ChessboardLayout from './components/chessboard_layout'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import LoginForm from './components/login/LoginForm'

let store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ LoginForm } />
        <Route path="board" component={ ChessboardLayout } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
