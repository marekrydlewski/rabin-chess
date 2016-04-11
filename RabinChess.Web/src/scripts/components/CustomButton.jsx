import React, { PropTypes } from 'react'
import Button from 'react-toolbox/lib/button'

const CustomButton = (onClick, counter) => (
  <Button label={counter.toString()} onClick={onClick} raised accent />
)

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  counter: PropTypes.string.isRequired
}

export default CustomButton
