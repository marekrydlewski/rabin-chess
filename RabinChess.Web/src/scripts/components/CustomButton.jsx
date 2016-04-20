import React, {PropTypes} from 'react'
import { Button } from 'react-toolbox'

/**
* Test button for Redux learning purpose
*/
class CustomButton extends React.Component {

  /**
  * Field containing props types requirements
  */
  static PropTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  /**
  * Renders Button
  * @returns {Button} Button with counter on it
  */
  render() {
    let { onClick, label } = this.props;
    return (<Button label={String(label) || ''} onClick={onClick} raised accent/>)
  }
}

export default CustomButton
