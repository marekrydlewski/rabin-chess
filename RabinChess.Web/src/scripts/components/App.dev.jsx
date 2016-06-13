import React from 'react'
import Favicon from 'react-favicon'
import Layout from './layout'
import DevTools from '../containers/DevTools'

import logo from '../../assets/logo.png'

/**
* Development version of App class.
* Component containing whole application.
*/
export default class App extends React.Component {
  /**
  * Display application.
  * @returns {Layout} Apllication layout component containing children component (routed by React router) and Redux DevTools
  */
  render() {
    return (
         <Layout route={this.props.routes[this.props.routes.length-1]}>
          <Favicon url={logo} />
          { this.props.children }
          <DevTools />
        </Layout>
    );
  }
}
