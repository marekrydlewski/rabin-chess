import React, { PropTypes } from 'react'
import BoardJS from 'chessboardjs'

import style from './chess_board'

/**
* Renders stateless chessboard (uses chessboard.js library).
*/
class ChessBoard extends React.Component {

  /**
  * Field containing default props values
  */
  static defaultProps = {
    onlyValid: false,
    sparePieces: false,
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  }

  /**
  * Field containing props types requirements
  */
  static PropTypes = {
    onlyValid: PropTypes.bool,
    sparePieces: PropTypes.bool,
    fen: PropTypes.string
  }

  /**
  * Basic constructor.
  * @param props Passed properties
  * @returns New ChessBoard instance
  */
  constructor(props) {
    super(props);
  }

  /**
  * Contains actions following component mount.
  */
  componentDidMount() {
    let { onlyValid, sparePieces, fen, onDragStart, onDrop } = this.props;
    let cfg = onlyValid ? {
      draggable: true,
      position: fen,
      onDragStart,
      onDrop,
      onSnapEnd: this.onSnapEnd
    } : {
        draggable: true,
        position: 'start',
        dropOffBoard: 'trash',
        sparePieces
      };

    setTimeout(()=>{
      this.board = BoardJS('board', cfg);
    }, 0);
  }

  _onSnapEnd() {
    this.props.onSnapEnd();
    this.board.position(this.props.fen);
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
