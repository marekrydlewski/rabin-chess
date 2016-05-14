import React, { PropTypes } from 'react'
import { Card, CardText } from 'react-toolbox'

class Notation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <Card>
      <CardText>
        { this.props.children }
      </CardText>
    </Card>
    )
  }
}

export default Notation
