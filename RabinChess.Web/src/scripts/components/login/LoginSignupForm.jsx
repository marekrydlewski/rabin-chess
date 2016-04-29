import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

import Login from './LoginDialog'
import Signup from './SignupDialog'

import style from './login_form'

/**
* Login and Signup dialogs.
*/
class LoginSignupForm extends React.Component {
  /**
  * Field containing context type requirements
  */
  static contextTypes= {
      router: React.PropTypes.object.isRequired
  };

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @param {object} context Application context
  * @returns {LoginSignupForm} Login and Signup dialogs
  */
  constructor(props, context) {
    super(props, context);
  }

  /**
  * Renders Login and Signup form.
  * @returns {Grid} Grid containing Login and Signup components
  */
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
