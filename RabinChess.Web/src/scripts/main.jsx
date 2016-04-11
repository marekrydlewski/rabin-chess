import '../styles/main_style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index.jsx'
import configureStore from './store/configureStore.jsx'

import Root from './components/Root.jsx'
import SampleComponent from './components/SampleComponent.jsx'

let store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Root } >
        <Route path="routed" component={ SampleComponent } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
