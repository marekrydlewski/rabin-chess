import React from 'react'
import {Card, Tab, Tabs} from 'react-toolbox';

import Login from './Login'
import Signup from './Signup'

import style from './login_form'

class LoginForm extends React.Component {
  /**
  * Field containing context type requirements
  */
  static contextTypes= {
      router: React.PropTypes.object.isRequired
  };

  /**
  * Basic constructor.
  * @param props Passed properties
  * @param context Application context
  * @returns {Login} Login card
  */
  constructor(props, context) {
    super(props, context);

    this.state = { index: 0 };
  }

  handleTabChange = (index) => {
    this.setState({index});
  };

  render () {
    return (
      <Card className={style['card']}>
      <Tabs className={style['tabMenu']} index={this.state.index} onChange={this.handleTabChange}>
        <Tab label='Login'><small><Login/></small></Tab>
        <Tab label='Signup'><small><Signup/></small></Tab>
      </Tabs>
      </Card>
    );
  }
}

export default LoginForm
