import React, {PropTypes} from 'react'
import Button from 'react-toolbox/lib/button'

class CustomButton extends React.Component {

  render() {
    let { onClick, label } = this.props;
    return (<Button label={label} onClick={onClick} raised accent/>)
  }
}
CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default CustomButton
