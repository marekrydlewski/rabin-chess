import React, {PropTypes} from 'react'
import {AppBar, Checkbox, IconButton, Button} from 'react-toolbox';
import {Layout as RTLayout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
import style from './main_layout';
import RouterContext from 'react-router'
class Layout extends React.Component {
  contextTypes: {
    router: React.PropTypes.func.isRequired;
  }
  someHandler() {
    this.context.router.push('/')
  }
  constructor(props) {
    super(props, context);
    this.state = {
      drawerActive: false,
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
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
          <Button  className={style['menuItem']}><p>Clear</p></Button>
          <Button className={style['menuItem']}><p>Start</p></Button>
        </NavDrawer>
        <Panel>
          <AppBar className={style['header']}><IconButton icon='menu' inverse={true} onClick={this.toggleDrawerActive}/>
            <img className={style['logo']} src='./logo.png' onClick={this.someHandler()}/>
            <h1>Rabin Chess</h1>
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
