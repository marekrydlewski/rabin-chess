import '../styles/main_style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index.jsx'
import configureStore from './store/configureStore.jsx'

import App from './components/App.jsx'
import SampleComponent from './components/SampleComponent.jsx'

let store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <Route path="routed" component={ SampleComponent } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
