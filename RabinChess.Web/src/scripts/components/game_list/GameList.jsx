import React, {PropTypes} from 'react'
import {List, ListSubHeader} from 'react-toolbox'

import style from './game_list'

import GameListItem from './GameListItem'

/**
* List of user games
*/
class GameList extends React.Component {

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {GameList} List of games
  */
  constructor(props) {
    super(props);

    /**
    * @type {object}
    * @property {GameListItem} User games
    */
    this.state = {
      games: props.games
    }
  }

  static PropTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  /**
  * Renders user games List
  * @return {List} List of games
  */
  render() {
    let {games} = this.props;
    let gameListItems = games.map((game, i) => {
      return (
        <GameListItem key={i} title={game.title} tags={game.tags} gameId={game.id} />
      )
    })
    return (
      <List selectable ripple>
        <ListSubHeader className={style['game_list_header']} caption="Your games" />
        {gameListItems}
      </List>
    );
  }

}

export default GameList
