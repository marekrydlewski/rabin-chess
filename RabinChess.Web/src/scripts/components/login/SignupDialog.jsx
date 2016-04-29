import React, {PropTypes} from 'react'
import { Dialog } from 'react-toolbox';
import { Button } from 'react-toolbox';
import Signup from './Signup'

import style from './login_form'

/**
* Signup dialog.
*/
class SignupDialog extends React.Component{

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @param {object} context Application context
  * @returns {SignupDialog} Signup dialog
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
    { label: "Signup", onClick: this.handleToggle, raised: true, active: true},
  ];

  /**
  * Renders Signup dialog.
  * @returns {div} Div containing signup dialog
  */
  render () {
    return (
      <div>
        <Button className={style['barButton']} label='Signup' onClick={this.handleToggle} raised accent/>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          className={style['content']}
        >
        <Signup/>
        </Dialog>
      </div>
    );
  }
}

export default SignupDialog
