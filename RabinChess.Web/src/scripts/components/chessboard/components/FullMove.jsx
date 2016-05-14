import React, { PropTypes } from 'react'
import { Chip } from 'react-toolbox'
import {Grid, Row, Col} from 'react-flexbox-grid'

import Move from './Move'
import MoveWithNumber from './MoveWithNumber'
import NumberOfMove from './NumberOfMove'

import style from './full_move'

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
    <Col xs={ 4 }>
      <div className= { style['move'] }>
        <NumberOfMove number={ number }/>
        <Move move={ moveWhite }/>
        <Move move={ moveBlack }/>
      </div>
    </Col>
    )
  }
}

export default FullMove
