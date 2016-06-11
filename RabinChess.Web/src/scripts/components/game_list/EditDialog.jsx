import React, {PropTypes} from 'react'
import { CardMedia, Input  } from 'react-toolbox';
import { Button } from '../ui'
import { Grid, Row, Col} from 'react-flexbox-grid'

import style from './game_list'

/**
* Signup Card Media.
*/
class EditDialog extends React.Component {

  /**
  * Field containing context type requirements
  */
  static contextTypes= {
      router: React.PropTypes.object.isRequired
  };

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @param {object} context Application context
  * @returns {Signup} Signup card media
  */
  constructor(props, context) {
    super(props, context);

    /**
    * @type {object}
    * @property {string} white User first name
    * @property {string} black User last name
    * @property {string} WhiteElo User WhiteElo
    * @property {string} BlackElo User name
    * @property {string} Event User Event
    */

    this.state = { white: this.props.gameTags.tags.white,
      black: this.props.gameTags.tags.black,
      whiteElo: this.props.gameTags.tags.whiteElo,
      blackElo: this.props.gameTags.tags.blackElo,
      event: this.props.gameTags.tags.event };
  }

  handleChange = (name, value) => {
    this.setState({[name]: value});
  };

  /**
  * Renders Signup CardMedia.
  * @returns {CardMedia} CardMedia containing signup elements
  */
  render() {
    return (
        <CardMedia>
          <section className={style['edit']}>
              <Input className={style['input']} type='text' label='White' icon='title' value={this.state.white} onChange={this.handleChange.bind(this, 'white')}/>
              <Input className={style['input']} type='text' label='Black' icon='title' value={this.state.black} onChange={this.handleChange.bind(this, 'black')}/>
              <Input className={style['input']} type='text' label='White Elo' icon='title' value={this.state.whiteElo} onChange={this.handleChange.bind(this, 'whiteElo')}/>
              <Input className={style['input']} type='text' label='Black Elo' icon='title' value={this.state.blackElo} onChange={this.handleChange.bind(this, 'blackElo')}/>
              <Input className={style['input']} type='text' label='Event' icon='title' value={this.state.event} onChange={this.handleChange.bind(this, 'event')}/>
              <Row><Col className={style['accept-button']}><Button label='Edit Data' onClick={this.props.onClick}/></Col></Row>
          </section>
        </CardMedia>
    )
  }

}

export default EditDialog
