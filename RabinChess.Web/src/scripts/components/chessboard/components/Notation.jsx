import React, { PropTypes } from 'react'
import { Card, CardText } from 'react-toolbox'
import {Grid, Row, Col} from 'react-flexbox-grid'

import style from './notation_card'

class Notation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <Card className={style['notes']}>
      <CardText>
        <Grid>
          <Row>
            { this.props.children }
          </Row>
        </Grid>
      </CardText>
    </Card>
    )
  }
}

export default Notation
