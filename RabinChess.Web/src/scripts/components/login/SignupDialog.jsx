import React, {PropTypes} from 'react'
import { Dialog } from 'react-toolbox'
import { Button } from '../ui'
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

  /**
  * Renders Signup dialog.
  * @returns {div} Div containing signup dialog
  */
  render () {
    let divStyle ={
      backgroundImage: 'url("../../../assets/signinikona.jpg")',
      backgroundPosition: 'center',
    };
    return (
      <div>
        <Button style={divStyle} className={style['barButton1']} label='Sign up' onClick={this.handleToggle}/>
        <Dialog
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          className={style['content']}
        >
        <Signup onClick={this.handleToggle}/>
        </Dialog>
      </div>
    );
  }
}

export default SignupDialog
