import React, { PropTypes } from 'react'
import { Chip } from 'react-toolbox'

import style from './full_move'

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
    <Chip className={style['number']}>
      <strong>
        { number }
      </strong>
    </Chip>
    )
  }
}

export default NumberOfMove
