import React, { PropTypes } from 'react'
import BoardJS from 'chessboardjs'

import style from './chess_board'

class ChessBoard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.board = BoardJS('board', 'start');
  }


  render () {
    return (
      <div id='board' className={style['chessboard']}></div>
    )
  }
}

export default ChessBoard;
