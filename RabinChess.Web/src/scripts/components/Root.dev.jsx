import React from 'react';
import App from './App.jsx';
import DevTools from '../containers/DevTools';

export default class Root extends React.Component {
  render() {
    return (
        <div>
          <App />
          <DevTools />
        </div>
    );
  }
}
