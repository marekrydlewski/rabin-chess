import React, { PropTypes } from 'react'
import { Chip } from 'react-toolbox'

import Move from './Move'
import MoveWithNumber from './MoveWithNumber'

class FullMove extends React.Component {

  static PropTypes = {
    moveWhite: PropTypes.string,
    moveBlack: PropTypes.string,
    number: PropTypes.number
  }

  constructor(props) {
    super(props);
  }

  render() {
  let { moveWhite, moveBlack, number } = this.props;

  return (
      <div>
        <MoveWithNumber move={ moveWhite } number={ number }/>
        <Move move={ moveBlack }/>
      </div>
    )
  }
}

export default FullMove
