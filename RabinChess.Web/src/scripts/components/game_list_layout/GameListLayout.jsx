import React from 'react'
import {Card} from 'react-toolbox'
import {Grid, Row, Col} from 'react-flexbox-grid'

import style from './game_list_layout'

import SmartGameList from '../game_list/SmartGameList'

/**
* Grid with list of games
*/
class GameListLayout extends React.Component {
  /**
  * Renders grid with games list
  * @return {Grid} List of games
  */
  render() {
    return (
      <Grid className={style['game_list_grid']}>
        <Row>
          <Col xs={6} smOffset={1} sm={6} mdOffset={1} md={6} lgOffset={1} lg={6}>
            <Card>
              <SmartGameList />
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default GameListLayout
