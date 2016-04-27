import React, {PropTypes} from 'react'
import {AppBar, Checkbox, IconButton, Button} from 'react-toolbox';
import {Layout as RTLayout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
import {Grid, Row, Col} from 'react-flexbox-grid'
import Menu from './Menu'
import Dialog from '../login/LoginForm'
import logo from '../../../assets/logo.png'

import style from './main_layout';
/**
* Main layout for application.
*/
class Layout extends React.Component {

  /**
  * Field containing context type requirements
  */
  static contextTypes= {
      router: React.PropTypes.object.isRequired
  };

  /**
  * Basic constructor.
  * @param props Passed properties
  * @param context Application context
  * @returns {Layout} New Layout instance
  */
  constructor(props, context) {
    super(props, context);

    this.state = {
      drawerActive: false,
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
  }

  /**
  * Returns to home page.
  */
  goHome() {
    this.context.router.push('/');
    this.setState({
      drawerActive: false
    });
  }

  /**
  * Shows/hides side menu.
  */
  toggleDrawerActive() {
    this.setState({
      drawerActive: !this.state.drawerActive
    });
  };

  /**
  * Renders application layout.
  * @returns {RTLayout} Layout containing header, footer and side menu
  */
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
            <img className={style['logo']} src={logo} onClick={this.goHome.bind(this)}/>
            <h1 onClick={this.goHome.bind(this)}>Rabin Chess</h1>
            <Dialog/>
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
