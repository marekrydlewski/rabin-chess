import React, { PropTypes } from 'react'
import { Chip } from 'react-toolbox'

class Move extends React.Component {

  static PropTypes = {
    move: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
  let { move } = this.props;

  return (
    <Chip>
      <span>
        { move }
      </span>
    </Chip>
    )
  }
}

export default Move
