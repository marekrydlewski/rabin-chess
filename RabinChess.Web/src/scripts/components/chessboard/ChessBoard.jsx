import React, { PropTypes } from 'react'
import BoardJS from 'chessboardjs'
//import ChessJS from 'chess'

import style from './chess_board'

/**
* Renders playable chessboard (uses chessboard.js library).
*/
class ChessBoard extends React.Component {

  /**
  * Basic constructor.
  * @param props Passed properties
  * @returns {Menu} New ChessBoard instance
  */
  constructor(props) {
    super(props);
  }

  /**
  * Contains actions following component mount.
  */
  componentDidMount() {
    let cfg = {
      draggable: true,
      dropOffBoard: 'trash',
      position: 'start',
      sparePieces: true
    }

    setTimeout(()=>{
      this.board = BoardJS('board', cfg);
    }, 0);
  }

  /**
  * Renders chessboard.
  * @returns {div} Playable chessboard
  */
  render () {
    return (
      <div id='board' className={style['chessboard']}></div>
    )
  }
}

export default ChessBoard
