import React from 'react'

import GameList from './game_list/GameList'

class TestPage extends React.Component {
  render(){
    return(
      <div>
        <GameList games={[{title: 'Title 1', tags: 'Some tags 1', id: 'ID1'}, {title: 'Title 2', tags: 'Some tags 2', id: 'ID2'}]} />
      </div>
    );
  }
}

export default TestPage
