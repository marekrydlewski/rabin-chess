import React, {PropTypes} from 'react'
import {AppBar, Checkbox, IconButton} from 'react-toolbox';
import {Layout as RTLayout, NavDrawer, Panel, Sidebar} from 'react-toolbox';
class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drawerActive: false,
      drawerPinned: false,
      sidebarPinned: false
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
    this.toggleDrawerPinned = this.toggleDrawerPinned.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleDrawerActive() {
    this.setState({
      drawerActive: !this.state.drawerActive
    });
  };

  toggleDrawerPinned() {
    this.setState({
      drawerPinned: !this.state.drawerPinned
    });
  }

  toggleSidebar() {
    this.setState({
      sidebarPinned: !this.state.sidebarPinned
    });
  };

  render() {
    return (
      <RTLayout>
        <NavDrawer active={this.state.drawerActive} pinned={this.state.drawerPinned} onOverlayClick={this.toggleDrawerActive}>
          <p>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
        <Panel>
          <AppBar><IconButton icon='menu' inverse={true} onClick={this.toggleDrawerActive}/></AppBar>
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.8rem'
          }}>
            <h1>Main Content</h1>
            <p>Main content goes here.</p>
            <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned}/>
            <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar}/>
          </div>
        </Panel>
        <Sidebar pinned={this.state.sidebarPinned} width={5}>
          <div><IconButton icon='close' onClick={this.toggleSidebar}/></div>
          <div style={{
            flex: 1
          }}>
            <p>Supplemental content goes here.</p>
          </div>
        </Sidebar>
      </RTLayout>
    );
  }
}

export default Layout
