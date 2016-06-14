import React from 'react'
import { connect } from 'react-redux'
import * as Action from '../../actions'
import {Grid, Row, Col} from 'react-flexbox-grid'

import SmartChessBoard from  '../chessboard'
import style from './chessboard_layout'

/*
 * Layout containing playable chessboard.
 */
class ChessboardLayout extends React.Component {

  constructor(props)
  {
    super(props);
  }

  /**
   * Display chessboard layout.
   * @returns {Grid} Grid containing playable chessboard
   */
  render() {
    let {game, tags} = this.props;
    return (
      <Grid className={style['grid']}>
        <SmartChessBoard pgnHeaders = { tags.join('\n') } pgnGame = { game } />
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  counter: state.counter,
  game: state.currentGame,
  tags: state.currentTags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeGame: (game) => {
      dispatch(Action.changeGame(game))
    },
    changeTags: (tags) => {
      dispatch(Action.changeTags(tags))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessboardLayout)
