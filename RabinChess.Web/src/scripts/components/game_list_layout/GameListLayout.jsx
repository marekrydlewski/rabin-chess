import React from 'react'
import {Card} from 'react-toolbox'
import {Grid, Row, Col} from 'react-flexbox-grid'

import SmartGameList from '../game_list/SmartGameList'

class GameListLayout extends React.Component {
  render() {
    return (
      <Grid>
        <Card>
          <SmartGameList />
        </Card>
      </Grid>
    )
  }
}

export default GameListLayout
