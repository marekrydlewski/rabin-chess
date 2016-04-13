import React from 'react';
import Layout from './layout'

import CounterContainer from '../containers/CounterContainer.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer />
        { this.props.children }
      </div>
    );
  }
}
