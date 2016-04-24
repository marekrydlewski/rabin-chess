import React, { PropTypes } from 'react'
import ChessJS from 'chess.js'

import ChessBoard from './Chessboard'


/**
* Renders playable chessboard (uses chessboard.js library).
*/
class SmartChessBoard extends React.Component {


  /**
  * Basic constructor.
  * @param props Passed properties
  * @returns {Menu} New SmartChessBoard instance
  */
  constructor(props) {
    super(props);
    this.game = ChessJS();
    this.state = {
      pgn: ''
    };
  }

  /**
  * Contains actions following component mount.
  */
  componentDidMount() {
    let { onlyValid, sparePieces } = this.props;
    let cfg = onlyValid ? {
      draggable: true,
      position: 'start',
      onDragStart: this._onDragStart.bind(this),
      onDrop: this._onDrop.bind(this),
      onSnapEnd: this._onSnapEnd.bind(this)
    } : {
        draggable: true,
        position: 'start',
        dropOffBoard: 'trash',
        sparePieces
      };
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
      <ChessBoard onlyValid = { true } sparePieces = { false }/>
    )
  }
}

export default SmartChessBoard
