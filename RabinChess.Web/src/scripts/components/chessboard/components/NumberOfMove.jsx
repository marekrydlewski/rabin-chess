import React, { PropTypes } from 'react'
import { Chip } from 'react-toolbox'

import style from './full_move'

/**
* Chip with move number
*/
class NumberOfMove extends React.Component {

  static PropTypes = {
    number: PropTypes.string
  }

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {NumberOfMove} Chip with move number
  */
  constructor(props) {
    super(props);
  }

  /**
  * Renders move number
  * @return {Chip} Move number
  */
  render() {
  let { number } = this.props;

  return (
    <Chip className={style['number']}>
      <strong>
        { number }
      </strong>
    </Chip>
    )
  }
}

export default NumberOfMove
