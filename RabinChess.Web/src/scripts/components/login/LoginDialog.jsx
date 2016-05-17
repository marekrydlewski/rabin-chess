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

  actions = [
    { label: 'Login', onClick: this.handleToggle, raised: true, active: true},
  ];

  /**
  * Renders Login dialog.
  * @returns {div} Div containing signup dialog
  */
  render () {
    let divStyle ={
      backgroundImage: 'url("../../../assets/LOGINikona.jpg")'
    };
    let label = 'Login\u00A0\u00A0'
    return (
      <div>
        <Button style={divStyle} className={style['barButton']} label={label} onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          className={style['content']}
        >
        <Login/>
        </Dialog>
      </div>
    );
  }
}

export default LoginDialog
