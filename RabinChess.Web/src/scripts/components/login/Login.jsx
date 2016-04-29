import React, {PropTypes} from 'react'
import { CardMedia, Button, Input } from 'react-toolbox'

import style from './login_form'

/**
* Login Card Media.
*/
class Login extends React.Component {

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
  * @returns {Login} Login card media
  */
  constructor(props, context) {
    super(props, context);

    /**
    * @type {object}
    * @property {string} username User name
    * @property {string} password User password
    */
    this.state = { username: '', password: '' };
  }

  handleChange = (name, value) => {
    this.setState({[name]: value});
  };

  /**
  * Renders login CardMedia.
  * @returns {CardMedia} CardMedia containing login elements
  */
  render() {
    return (
        <CardMedia>
          <section className={style['content']}>
              <Input className={style['input']} type='text' label='Username' icon='person' value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
              <Input className={style['input']} type='password' label='Password' icon='lock' value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          </section>
        </CardMedia>
    )
  }
}

export default Login
