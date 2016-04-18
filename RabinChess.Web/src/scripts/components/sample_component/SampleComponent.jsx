import React from 'react'
import style from './sample_component'
import {Grid, Row, Col} from 'react-flexbox-grid'

import ChessBoard from  '../chessboard'
import CounterContainer from '../../containers/CounterContainer'
/**
 * SampleComponent class
 */
export default class SampleComponent extends React.Component {
  /**
   * Display div
   * @return {div} Routed thing
   */
  render() {
    return (
      <div>
        <Grid>
          <ChessBoard/>
        </Grid>
      </div>
    )
  }
}
