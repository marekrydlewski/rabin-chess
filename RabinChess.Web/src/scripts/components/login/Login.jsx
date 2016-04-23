import React, {PropTypes} from 'react'
import { Taba, Tab } from 'react-toolbox';
import { Card, CardTitle, CardMedia } from 'react-toolbox';
import { Button, Input } from 'react-toolbox';

import style from './login_form'

class Login extends React.Component {

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

    this.state = { username: '', password: '' };
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
      <Card className={style['card']}>
        <CardTitle
          title = 'Login'
        />
        <CardMedia>
          <section className={style['content']}>
              <Input type='text' label='Username' icon='person' value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
              <Input type='password' label='Password' icon='lock' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          </section>
          <Button className={style['accept']}><p>Login</p></Button>
        </CardMedia>
      </Card>
    )
  }

}

export default Login
