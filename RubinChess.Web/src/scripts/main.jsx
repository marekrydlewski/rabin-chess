import '../styles/main'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

import app from './components/app.jsx'
import sampleComponent from './components/sampleComponent.jsx'

ReactDOM.render((
  <Router>
    <Route path="/" component={ app } >
      <Route path="routed" component={ sampleComponent } />
    </Route>
  </Router>
), document.getElementById('root'));
