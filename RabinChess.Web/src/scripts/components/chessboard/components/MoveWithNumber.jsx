import React, { PropTypes } from 'react'
import { Chip, Avatar } from 'react-toolbox'

/**
* Move with number
*/
class MoveWithNumber extends React.Component {

  static PropTypes = {
    move: PropTypes.string
  }

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {MoveWithNumber} Player move with number
  */
  constructor(props) {
    super(props);
  }

  /**
  * Renders player move
  * @returns {Chip} Compponent with player move
  */
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
