import '../styles/main_style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index.jsx'
import configureStore from './store/configureStore'

import App from './components/App.jsx'
import SampleComponent from './components/sample_component'

let store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <Route path="board" component={ SampleComponent } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
