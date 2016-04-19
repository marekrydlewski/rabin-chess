import React, {PropTypes} from 'react'
import {AppBar, Checkbox, IconButton, Button} from 'react-toolbox';
import {Layout as RTLayout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
import {Grid, Row, Col} from 'react-flexbox-grid'
import Menu from './Menu'

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

  toggleDrawerActive() {
    this.setState({
      drawerActive: !this.state.drawerActive
    });
  };

  render() {
    return (
      <RTLayout className={style['main']}>
        <NavDrawer active={this.state.drawerActive} pinned={this.state.drawerPinned} onOverlayClick={this.toggleDrawerActive}>
          <Grid className={style['menu']}>
          <Menu/>
          </Grid>
        </NavDrawer>
        <Panel>
          <AppBar className={style['header']}><IconButton icon='menu' inverse={true} onClick={this.toggleDrawerActive}/>
            <img className={style['logo']} src='./logo.png' onClick={this.goHome.bind(this)}/>
            <h1 onClick={this.goHome.bind(this)}>Rabin Chess</h1>
          </AppBar>
          <div className={style['content']}>
            { this.props.children }
          </div>
          <footer className={style['footer']}>
            <h5 className={style['text']}>Software Engineering Project</h5>
          </footer>
        </Panel>
      </RTLayout>
    );
  }
}

export default Layout
