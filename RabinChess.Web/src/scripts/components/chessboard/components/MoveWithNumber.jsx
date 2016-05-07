import React, { PropTypes } from 'react'
import { Chip, Avatar } from 'react-toolbox'

class MoveWithNumber extends React.Component {

  static PropTypes = {
    move: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
  let { move, number } = this.props;

  return (
    <Chip>
      <Avatar title={ number } />
      <span>
        { move }
      </span>
    </Chip>
    )
  }
}

export default MoveWithNumber
