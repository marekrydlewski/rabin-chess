import React from 'react'

import GameListItem from './game_list/GameListItem'

class TestPage extends React.Component {
  render(){
    return(
      <div>
        <GameListItem title="Sample item" tags="Here will be tags" gameId="SAMPLE_ID" />
      </div>
    );
  }
}

export default TestPage
