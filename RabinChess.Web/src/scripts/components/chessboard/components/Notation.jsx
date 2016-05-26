import React, { PropTypes } from 'react'
import { Card, CardText } from 'react-toolbox'
import {Grid, Row, Col} from 'react-flexbox-grid'
import classnames from 'classnames'

import style from './notation_card'


/**
* Notation card
*/
class Notation extends React.Component {

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {Notation} Full notation card
  */
  constructor(props) {
    super(props);
  }

  /**
  * Renders card with game Notation
  * @return {Card} Card with game notation
  */
  render() {
  let notationStyle = classnames(style['notes'], this.props.className);
  return (
    <Card className={notationStyle}>
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
