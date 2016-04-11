import React from 'react';
import ToolboxApp from 'react-toolbox/lib/app'

import CounterContainer from '../containers/CounterContainer.jsx'

export default class Root extends React.Component {
  render() {
    return (
      <ToolboxApp>
        <CounterContainer />
        { this.props.children }
      </ToolboxApp>
    );
  }
}
