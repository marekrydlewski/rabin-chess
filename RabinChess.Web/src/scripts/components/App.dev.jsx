import React from 'react';
import ToolboxApp from 'react-toolbox'

import CounterContainer from '../containers/CounterContainer.jsx'
import DevTools from '../containers/DevTools';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer />
        { this.props.children }
        <DevTools />
      </div>

    );
  }
}
