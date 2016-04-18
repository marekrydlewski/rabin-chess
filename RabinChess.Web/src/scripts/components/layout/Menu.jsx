import React from 'react'
import {Drawer, Button} from 'react-toolbox'
import {Grid, Row} from 'react-flexbox-grid'

import style from './main_layout';

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
    var menuElements = [
      { name: 'Home',       path: '/' },
      { name: 'Chessboard', path: '/routed' },
      { name: 'Docs',       path: '/docs' }
    ];
    var rows = menuElements.map(function(elem){
                console.log(elem.path);
                return (
                  <Row>
                    <Button className={style['menuItem']} onClick={this.goPage.bind(this, elem.path)}><p>{elem.name}</p></Button>
                  </Row>
                )
              }, this)
    return (
      <div>
        { rows }
      </div>
    )
  }
}

export default Menu
