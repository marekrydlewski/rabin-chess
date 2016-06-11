import React, {PropTypes} from 'react'
import { Dialog } from 'react-toolbox'
import { Button } from '../ui'
import Login from './Login'

import style from './login_form'

/**
* Login dialog.
*/
class LoginDialog extends React.Component{

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @param {object} context Application context
  * @returns {LoginDialog} Login dialog
  */
  constructor(props, context) {
    super(props, context);

    /**
    * @type {object}
    * @property {bool} active Dialog visibility
    */
    this.state = {
      active: false
    };
  }

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  /**
  * Renders Login dialog.
  * @returns {div} Div containing signup dialog
  */
  render () {
    return (
      <div>
        <Button className={style['barButton']} label='Login' onClick={this.handleToggle}/>
        <Dialog
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          className={style['content']}
        >
        <Login onClick={this.handleToggle}/>
        </Dialog>
      </div>
    );
  }
}

export default LoginDialog
