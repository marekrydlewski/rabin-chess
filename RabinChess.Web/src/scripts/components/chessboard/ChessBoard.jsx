import React, { PropTypes } from 'react'
import BoardJS from 'chessboardjs'

import style from './chess_board'

class ChessBoard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var cfg = {
      draggable: true,
      dropOffBoard: 'trash',
      position: 'start'
    }
    this.board = BoardJS('board', cfg);
  }


  render () {
    return (
      <div id='board' className={style['chessboard']}></div>
    )
  }
}

export default ChessBoard
