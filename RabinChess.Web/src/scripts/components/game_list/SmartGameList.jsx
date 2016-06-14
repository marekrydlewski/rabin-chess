import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { hashHistory} from 'react-router'

import * as Action from '../../actions'
import GameList from './GameList'


let gameList = [
  {
    tags:
      {
        event: 'Fischer - Spassky World Championship Match',
        white: 'Boris Spassky',
        black: 'Robet James Ficher',
        whiteElo: '?',
        blackElo: '?'
      },
      id: 'ID1',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Nd2 Nbd7 8. e4 Bg7 9. Be2 O-O 10. O-O Re8 11. Qc2 Nh5 12. Bxh5 gxh5 13. Nc4 Ne5 14. Ne3 Qh4 15. Bd2 Ng4 16. Nxg4 hxg4 17. Bf4 Qf6 18. g3 Bd7 19. a4 b6 20. Rfe1 a6 21. Re2 b5 22. Rae1 Qg6 23. b3 Re7 24. Qd3 Rb8 25. axb5 axb5 26. b4 c4 27. Qd2 Rbe8 28. Re3 h5 29. R3e2 Kh7 30. Re3 Kg8 31. R3e2 Bxc3 32. Qxc3 Rxe4 33. Rxe4 Rxe4 34. Rxe4 Qxe4 35. Bh6 Qg6 36. Bc1 Qb1 37. Kf1 Bf5 38. Ke2 Qe4+ 39. Qe3 Qc2+ 40. Qd2 Qb3 41. Qd4 Bd3+ 0-1`
  },
   {
     tags:
     {
      event: 'Hoogovens (1996)',
      white: 'Vassily Ivanchuk',
      black: 'Alexey Shirov',
      whiteElo: '2755',
      blackElo: '2688'
      },
      id: 'ID2',
      pgn: `1.d4 d5 2.c4 c6 3.Nc3 Nf6 4.Nf3 e6 5.Bg5 dxc4 6.e4 b5 7.e5 h6 8.Bh4 g5 9.Nxg5 hxg5 10.Bxg5 Nbd7 11.exf6 Bb7 12.g3 c5 13.d5 Qb6 14.Bg2 O-O-O 15.O-O b4 16.Na4 Qb5 17.a3 exd5 18.axb4 cxb4 19.Be3 Nc5 20.Qg4+ Rd7 21.Qg7 Bxg7 22.fxg7 Rg8 23.Nxc5 d4 24.Bxb7+ Rxb7 25.Nxb7 Qb6 26.Bxd4 Qxd4 27.Rfd1 Qxb2 28.Nd6+ Kb8 29.Rdb1 Qxg7 30.Rxb4+ Kc7 31.Ra6 Rb8 32.Rxa7+ Kxd6 33.Rxb8 Qg4 34.Rd8+ Kc6 35.Ra1 1-0`
   }
];


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
    /**
    * @type {object}
    * @property {object} games List of games from api
    */
    this.state = {
      games: gameList
    }
  }

  editTagsHandler() {

  }

  viewHandler(i) {
    this.props.changeGame(this.state.games[i].pgn);
    hashHistory.push('board');
  }

  /**
  * Renders list of games based on data from api
  * @return {GameList} List of games
  */
  render() {
    return (
      <GameList
         games={this.state.games}
         editTagsHandler={this.editTagsHandler.bind(this)}
         viewHandler={this.viewHandler.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  game: state.currentGame,
  tags: state.currentTags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeGame: (game) => {
      console.log(game);
      dispatch(Action.changeGame(game))
    },
    changeTags: (tags) => {
      dispatch(Action.changeTags(tags))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartGameList)
