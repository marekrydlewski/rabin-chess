import React, {PropTypes} from 'react'

import GameList from './GameList'

class SmartGameList extends React.Component {

  constructor(props) {
    super(props);

    //get games from api
    let gameList = [{title: 'Title 1', tags: 'Some tags 1', id: 'ID1'}, {title: 'Title 2', tags: 'Some tags 2', id: 'ID2'}];

    this.state = {
      games: gameList
    }
  }

  render() {
    return (
      <GameList games={this.state.games} />
    )
  }

}

export default SmartGameList
