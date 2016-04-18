import React from 'react';
import Layout from './layout'

export default class App extends React.Component {
  render() {
    return (
        <Layout>
          { this.props.children }
        </Layout>
    );
  }
}
