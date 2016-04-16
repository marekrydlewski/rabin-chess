import React, {PropTypes} from 'react'
import {AppBar, Checkbox, IconButton, Button} from 'react-toolbox';
import {Layout as RTLayout, Drawer, Panel, Sidebar} from 'react-toolbox';
import {Grid, Row, Col} from 'react-flexbox-grid'

import style from './main_layout';

class Layout extends React.Component {

  static contextTypes= {
      router: React.PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      drawerActive: false,
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
  }

  goHome() {
    this.context.router.push('/');
    this.setState({
      drawerActive: false
    });
  }

  goChessBoard() {
    this.context.router.push('/routed');
    this.setState({
      drawerActive: false
    });
  }

  toggleDrawerActive() {
    this.setState({
      drawerActive: !this.state.drawerActive
    });
  };


  render() {
    return (
      <RTLayout className={style['main']}>
        <Drawer active={this.state.drawerActive} pinned={this.state.drawerPinned} onOverlayClick={this.toggleDrawerActive}>
          <Grid className={style['menu']}>
            <Row>
              <Button className={style['menuItem']} onClick={this.goChessBoard.bind(this)}><p>Chessboard</p></Button>
            </Row>
            <Row>
              <Button className={style['menuItem']}><p>Docs</p></Button>
            </Row>
          </Grid>
        </Drawer>
        <Panel>
          <AppBar className={style['header']}><IconButton icon='menu' inverse={true} onClick={this.toggleDrawerActive}/>
            <img className={style['logo']} src='./logo.png' onClick={this.goHome.bind(this)}/>
            <h1 onClick={this.goHome.bind(this)}>Rabin Chess</h1>
          </AppBar>
            { this.props.children }
          <footer className={style['footer']}>
            <h5 className={style['text']}>Software Engineering Project</h5>
          </footer>
        </Panel>
      </RTLayout>
    );
  }
}

export default Layout
