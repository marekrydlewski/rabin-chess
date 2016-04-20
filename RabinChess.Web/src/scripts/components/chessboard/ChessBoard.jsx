import React, { PropTypes } from 'react'
import BoardJS from 'chessboardjs'
import ChessJS from 'chess.js'

import style from './chess_board'

/**
* Renders playable chessboard (uses chessboard.js library).
*/
class ChessBoard extends React.Component {


  static defaultProps = {
    onlyValid: false,
    sparePieces: false,
  }

  /**
  * Field containing props types requirements
  */
  static PropTypes = {
    onlyValid: PropTypes.bool.isRequired,
    sparePieces: PropTypes.bool.isRequired
  }

  /**
  * Basic constructor.
  * @param props Passed properties
  * @returns {Menu} New ChessBoard instance
  */
  constructor(props) {
    super(props);
    this.game = ChessJS();
    console.log(this.game);
  }



  /**
  * Contains actions following component mount.
  */
  componentDidMount() {
    let cfg = {
      draggable: true,
      position: 'start',
      onDragStart: this._onDragStart.bind(this),
      onDrop: this._onDrop.bind(this),
      onSnapEnd: this._onSnapEnd.bind(this)
    }

    setTimeout(()=>{
      this.board = BoardJS('board', cfg);
      this._updateStatus();
    }, 0);
  }

  _onDragStart(source, piece, position, orientation) {
    if (this.game.game_over() === true ||
      (this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (this.game.turn() === 'b' && piece.search(/^w/) !== -1))
        return false;
  }

  _onDrop(source, target) {
    let move = this.game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    if (move === null) return 'snapback';
    this._updateStatus();
  }

  _onSnapEnd() {
    this.board.position(this.game.fen());
  }

  _updateStatus() {
    let status = '';

    let moveColor = 'White';
    if (this.game.turn() === 'b') {
      moveColor = 'Black';
    }

    // checkmate?
    if (this.game.in_checkmate() === true) {
      status = 'Game over, ' + moveColor + ' is in checkmate.';
    }

    // draw?
    else if (this.game.in_draw() === true) {
      status = 'Game over, drawn position';
    }

    // game still on
    else {
      status = moveColor + ' to move';

      // check?
      if (this.game.in_check() === true) {
        status += ', ' + moveColor + ' is in check';
      }
    }
    console.log(status);
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
