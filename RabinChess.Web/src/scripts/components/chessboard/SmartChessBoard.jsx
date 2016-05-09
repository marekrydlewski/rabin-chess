import React, { PropTypes } from 'react'
import ChessJS from 'chess.js'
import { Button } from 'react-toolbox'

import ChessBoard from './ChessBoard'
import { FullMove, NumberOfMove, Move, Notation } from './components'


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

    let { pgnHeaders, pgnGame } = this.props;
    if (pgnGame) this.game.load_pgn( pgnHeaders + pgnGame );

    this.state = {
      fen: this.game.fen()
    };
  }

  _undo() {
    this.game.undo();
    console.log(this.game.ascii());
    console.log(this.game.pgn());
    this.setState({
      fen: this.game.fen()
    });
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

  _renderNotation() {
    return this.props.pgnGame.split(' ').map((elem, index) => {
        if ( index % 3 === 0) return (<NumberOfMove number={ elem } key={ index } />);
        else return (<Move move= { elem } key={ index } />);
    });
  }

  /**
  * Renders wrapped chessboard
  * @returns {ChessBoard} Chessboard with logic
  */
  render () {
    console.log(this.props.pgnGame);
    console.log(this.props.pgnGame.split(' '));
    let moves = this._renderNotation();
    console.log(moves);
    return (
      <div>
        <ChessBoard
          fen = { this.state.fen }
          onlyValid = { true }
          sparePieces = { false }
          onDragStart = { this._onDragStart.bind(this) }
          onDrop = { this._onDrop.bind(this) }
          onSnapEnd = { this._onSnapEnd.bind(this) }
        />
        <Button label='Cofnij' onClick={this._undo.bind(this)}></Button>
          { moves }
      </div>
    )
  }
}

export default SmartChessBoard
