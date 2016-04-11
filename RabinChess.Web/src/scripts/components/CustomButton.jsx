import React, {PropTypes} from 'react'
import Button from 'react-toolbox/lib/button'

class CustomButton extends React.Component {

  static PropTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  render() {
    let { onClick, label } = this.props;
    return (<Button label={String(label) || ''} onClick={onClick} raised accent/>)
  }
}

export default CustomButton
