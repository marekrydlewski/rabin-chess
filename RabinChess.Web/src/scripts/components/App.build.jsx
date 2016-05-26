import React from 'react';
import Favicon from 'react-favicon'
import Layout from './layout'

import logo from '../../assets/logo.png'
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
          <Favicon url={logo} />
          { this.props.children }
        </Layout>
    );
  }
}
