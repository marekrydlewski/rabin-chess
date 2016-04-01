import '../styles/style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

import App from './components/App.jsx'
import SampleComponent from './components/SampleComponent.jsx'

ReactDOM.render((
  <Router>
    <Route path="/" component={ App } >
      <Route path="routed" component={ SampleComponent } />
    </Route>
  </Router>
), document.getElementById('root'));
