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
          <Col sm md lg />
          <Col xs={12} sm={10} md={10} lg={10}>
            <Card>
              <SmartGameList />
            </Card>
          </Col>
          <Col sm md lg />
        </Row>
      </Grid>
    )
  }
}

export default GameListLayout
