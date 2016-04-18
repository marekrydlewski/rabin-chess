import React from 'react';
import Layout from './layout'
import DevTools from '../containers/DevTools';

export default class App extends React.Component {
  render() {
    return (
        <Layout>
          { this.props.children }
          <DevTools />
        </Layout>
    );
  }
}
