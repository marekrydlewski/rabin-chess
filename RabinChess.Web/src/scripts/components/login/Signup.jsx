import React, {PropTypes} from 'react'
import { Taba, Tab } from 'react-toolbox';
import { Card, CardTitle, CardMedia } from 'react-toolbox';
import { Button, Input } from 'react-toolbox';

import style from './login_form'

class Signup extends React.Component {

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
  * @returns {Signup} Signup card
  */
  constructor(props, context) {
    super(props, context);

    this.state = { firstname: '', surname: '', email: '', username: '', password: '' };
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {
    return (
        <CardMedia>
          <section className={style['content']}>
              <Input className={style['input']} type='text' label='First name' value={this.state.firstname} onChange={this.handleChange.bind(this, 'firstname')}/>
              <Input className={style['input']} type='text' label='Surname' value={this.state.surname} onChange={this.handleChange.bind(this, 'surname')}/>
              <Input className={style['input']} type='email' label='Email' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
              <Input className={style['input']} type='text' label='Username' icon='person' value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
              <Input className={style['input']} type='password' label='Password' icon='lock' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          </section>
          <Button className={style['accept']} raised accent><p>Sign up</p></Button>
        </CardMedia>
    )
  }

}

export default Signup
