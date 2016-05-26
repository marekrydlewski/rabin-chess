import React, { PropTypes } from 'react'
import { Chip } from 'react-toolbox'

import style from './full_move'

/**
* Player move
*/
class Move extends React.Component {


  static PropTypes = {
    move: PropTypes.string
  }

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {Move} Chip with move
  */
  constructor(props) {
    super(props);
  }

  /**
  * Renders player move
  * @return {Chip} Player move in chip
  */
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
