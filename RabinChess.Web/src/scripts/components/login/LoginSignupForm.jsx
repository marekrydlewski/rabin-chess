import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

import Login from './LoginDialog'
import Signup from './SignupDialog'

import style from './login_form'

class LoginSignupForm extends React.Component {
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
      <Grid>
        <Row end='xs'>
          <Col><Login/></Col>
          <Col><Signup/></Col>
        </Row>
      </Grid>
    );
  }
}

export default LoginSignupForm
