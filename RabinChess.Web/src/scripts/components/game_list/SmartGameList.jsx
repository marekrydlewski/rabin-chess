import React, {PropTypes} from 'react'

import GameList from './GameList'

/**
* Get game list from api
*/
class SmartGameList extends React.Component {

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {SmartGameList} List of games from api
  */
  constructor(props) {
    super(props);

    //get games from api
    let gameList = [{title: 'Title 1', tags: 'Some tags 1', id: 'ID1'}, {title: 'Title 2', tags: 'Some tags 2', id: 'ID2'}];

    /**
    * @type {object}
    * @property {object} games List of games from api
    */
    this.state = {
      games: gameList
    }
  }

  /**
  * Renders list of games based on data from api
  * @return {GameList} List of games
  */
  render() {
    return (
      <GameList games={this.state.games} />
    )
  }

}

export default SmartGameList
