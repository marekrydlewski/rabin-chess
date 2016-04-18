import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

import ChessBoard from  '../chessboard'

/**
 * ChessboardLayout class
 */
export default class ChessboardLayout extends React.Component {
  /**
   * Display div
   * @return {div} Routed thing
   */
  render() {
    return (
      <Grid>
        <ChessBoard />
      </Grid>
    )
  }
}
