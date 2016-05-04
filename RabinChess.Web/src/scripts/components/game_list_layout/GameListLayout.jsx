import React from 'react'
import {Card} from 'react-toolbox'
import {Grid, Row, Col} from 'react-flexbox-grid'

import style from './game_list_layout'

import SmartGameList from '../game_list/SmartGameList'

class GameListLayout extends React.Component {
  render() {
    return (
      <Grid className={style['game_list_grid']}>
        <Row>
          <Col xs={12} smOffset={1} sm={10} mdOffset={1} md={10} lgOffset={1} lg={10}>
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
