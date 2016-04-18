import React from 'react'
import {Drawer, Button} from 'react-toolbox'
import {Grid, Row} from 'react-flexbox-grid'

import style from './main_layout';

const menuElements = [
  { name: 'Home',       path: '/' },
  { name: 'Chessboard', path: '/board' },
  { name: 'Docs',       path: '/docs' }
];

class Menu extends React.Component {

  static contextTypes= {
      router: React.PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  goPage(path) {
    this.context.router.push(path);
  }

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
