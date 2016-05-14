import React, { PropTypes } from 'react'
import { Card, CardText } from 'react-toolbox'

import style from './notation_card'

class Notation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <Card className={style['notes']}>
      <CardText>
        { this.props.children }
      </CardText>
    </Card>
    )
  }
}

export default Notation
