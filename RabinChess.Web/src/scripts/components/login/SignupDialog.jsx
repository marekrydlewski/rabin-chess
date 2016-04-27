import React, {PropTypes} from 'react'
import { Dialog } from 'react-toolbox';
import { Button } from 'react-toolbox';
import Signup from './Signup'

import style from './login_form'

class SignupDialog extends React.Component{

  constructor(props, context) {
    super(props, context);

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
