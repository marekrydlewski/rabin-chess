import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

import ChessBoard from  '../chessboard'

/**
 * Layout containing playable chessboard.
 */
export default class ChessboardLayout extends React.Component {
  /**
   * Display chessboard layout.
   * @returns {Grid} Grid containing playable chessboard
   */
  render() {
    return (
      <Grid>
        <ChessBoard />
      </Grid>
    )
  }
}
