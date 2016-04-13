import React from 'react';
import ToolboxApp from 'react-toolbox/lib/app'

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
