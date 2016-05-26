import React, {PropTypes} from 'react'
import { CardMedia, Input  } from 'react-toolbox';
import { Button } from '../ui'
import { Grid, Row, Col} from 'react-flexbox-grid'

import style from './login_form'

/**
* Signup Card Media.
*/
class Signup extends React.Component {

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
  * @returns {Signup} Signup card media
  */
  constructor(props, context) {
    super(props, context);

    /**
    * @type {object}
    * @property {string} firstname User first name
    * @property {string} surname User last name
    * @property {string} email User email
    * @property {string} username User name
    * @property {string} password User password
    */
    this.state = { firstname: '', surname: '', email: '', username: '', password: '' };

  }

  handleChange = (name, value) => {
    this.setState({[name]: value});
  };

  /**
  * Renders Signup CardMedia.
  * @returns {CardMedia} CardMedia containing signup elements
  */
  render() {
    return (
        <CardMedia>
          <section className={style['content']}>
              <Input className={style['input']} type='text' label='First name' icon='title' required value={this.state.firstname} onChange={this.handleChange.bind(this, 'firstname')}/>
              <Input className={style['input']} type='text' label='Surname' icon='title' value={this.state.surname} onChange={this.handleChange.bind(this, 'surname')}/>
              <Input className={style['input']} type='email' label='Email' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
              <Input className={style['input']} type='text' label='Username' icon='person' required value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
              <Input className={style['input']} type='password' label='Password' icon='lock' required value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
              <Row><Col className={style['accept-button']}><Button label='Sign up' onClick={this.props.onClick}/></Col></Row>
          </section>
        </CardMedia>
    )
  }

}

export default Signup
