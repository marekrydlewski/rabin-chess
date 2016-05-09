import React, { PropTypes } from 'react'
import { Chip } from 'react-toolbox'

class NumberOfMove extends React.Component {

  static PropTypes = {
    number: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
  let { number } = this.props;

  return (
    <Chip>
      <strong>
        { number }
      </strong>
    </Chip>
    )
  }
}

export default NumberOfMove
