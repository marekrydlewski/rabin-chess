import React from 'react'
import {Drawer, Button} from 'react-toolbox'
import {Grid, Row} from 'react-flexbox-grid'

import style from './main_layout'

const menuElements = [
  { name: 'Home',       path: '/' },
  { name: 'Chessboard', path: '/board' },
  { name: 'Test',       path: '/test-page' }
];

/**
* Side menu containig links to subpages
*/
class Menu extends React.Component {

  /**
  * Field containing context type requirements.
  */
  static contextTypes= {
      router: React.PropTypes.object.isRequired
  };

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @param {object} context Application context
  * @returns {Menu} New Menu instance
  */
  constructor(props, context) {
    super(props, context);
  }

  /**
  * Routes to pointed path.
  * @param {string} path Path to route to
  */
  _goPage(path) {
    this.context.router.push(path);
  }

  /**
  * Renders menu.
  * @returns {div} Div containing menu
  */
  render() {
    let rows = menuElements.map((elem, i) => {
              return (
                <div className={style['menuItem']} key={i}>
                  <Button onClick={this._goPage.bind(this, elem.path)} label={ elem.name } flat/>
                </div>)});
    return (
      <div>
        { rows }
      </div>
    )
  }
}

export default Menu
