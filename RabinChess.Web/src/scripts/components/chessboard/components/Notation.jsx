import React, { PropTypes } from 'react'
import { Card } from 'react-toolbox'

class Notation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  return (
    <Card>
      { this.props.children }
    </Card>
    )
  }
}

export default Notation
