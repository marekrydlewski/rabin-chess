import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

import SmartGameList from '../game_list/SmartGameList'

class GameListLayout extends React.Component {
  render() {
    return (
      <Grid>
        <SmartGameList />
      </Grid>
    )
  }
}

export default GameListLayout
