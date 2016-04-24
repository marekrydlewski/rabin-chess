import React, { PropTypes } from 'react'
import BoardJS from 'chessboardjs'

import style from './chess_board'

/**
* Renders playable chessboard (uses chessboard.js library).
*/
class ChessBoard extends React.Component {


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
  * @returns {Menu} New ChessBoard instance
  */
  constructor(props) {
    super(props);
  }

  /**
  * Contains actions following component mount.
  */
  componentDidMount() {
    let { onlyValid, sparePieces, fen } = this.props;
    let cfg = onlyValid ? {
      draggable: true,
      position: fen
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

      //onDragStart: this._onDragStart.bind(this),
      //onDrop: this._onDrop.bind(this),
      //onSnapEnd: this._onSnapEnd.bind(this)
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
