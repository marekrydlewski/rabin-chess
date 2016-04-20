import React from 'react';
import Layout from './layout'

/**
* Production version of App class.
* Component containing whole application.
*/
export default class App extends React.Component {
  /**
  * Display application.
  * @returns {Layout} Apllication layout component containing children component (routed by React router)
  */
  render() {
    return (
        <Layout>
          { this.props.children }
        </Layout>
    );
  }
}
