import React, { PropTypes } from 'react'
import ChessJS from 'chess.js'

import ChessBoard from './ChessBoard'


/**
* Renders chessboard with logic (uses chess.js library).
*/
class SmartChessBoard extends React.Component {


  /**
  * Basic constructor.
  * @param props Passed properties
  * @returns New SmartChessBoard instance
  */
  constructor(props) {
    super(props);
    this.game = ChessJS();

    let { pgn } = this.props;
    if (pgn) this.game.load_pgn(pgn.join('\n'));

    this.state = {
      fen: this.game.fen()
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
  }

  _onSnapEnd() {
    this.setState({
      fen: this.game.fen()
    });
  }

  /**
  * Renders wrapped chessboard
  * @returns {ChessBoard} Chessboard with logic
  */
  render () {
    return (
      <ChessBoard
        fen = { this.state.fen }
        onlyValid = { true }
        sparePieces = { false }
        onDragStart = { this._onDragStart.bind(this) }
        onDrop = { this._onDrop.bind(this) }
        onSnapEnd = { this._onSnapEnd.bind(this) }
      />
    )
  }
}

export default SmartChessBoard
