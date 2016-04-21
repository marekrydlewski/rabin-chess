import React from 'react'
import {Drawer, Button} from 'react-toolbox'
import {Grid, Row} from 'react-flexbox-grid'

import style from './main_layout';

const menuElements = [
  { name: 'Home',       path: '/' },
  { name: 'Chessboard', path: '/board' },
  { name: 'Docs',       path: '/docs' }
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
  * @param props Passed properties
  * @param context Application context
  * @returns {Menu} New Menu instance
  */
  constructor(props, context) {
    super(props, context);
  }

  /**
  * Routes to pointed path.
  * @param {string} path Path to route to
  */
  goPage(path) {
    this.context.router.push(path);
  }

  /**
  * Renders menu.
  * @returns {div} Div containing menu
  */
  render() {
    let rows = menuElements.map((elem) => {
              return (
                <Row>
                  <Button className={style['menuItem']} onClick={this.goPage.bind(this, elem.path)}><p>{ elem.name }</p></Button>
                </Row>)});
    return (
      <div>
        { rows }
      </div>
    )
  }
}

export default Menu