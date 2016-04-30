import React, {PropTypes} from 'react'
import {ListItem} from 'react-toolbox'

import style from './game_list'
import avatar from '../../../assets/game_list_item_avatar.png'

class GameListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gameId: props.gameId
    }
  }

  static PropTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    gameId: PropTypes.string.isRequired
  }

  render() {
    let {title, tags} = this.props;
    return(
      <ListItem className={style['game_list_item']} avatar={avatar} caption={title} legend={tags} />
    );
  }
}

export default GameListItem
