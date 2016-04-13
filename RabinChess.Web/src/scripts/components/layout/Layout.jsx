import React, { PropTypes } from 'react'
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout as RTLayout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <RTLayout>
        <Panel>
          <AppBar><IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/></AppBar>
          <div>
              <h1>Main Content</h1>
              <p>Main content goes here.</p>
              <Checkbox label='Pin drawer'/>
              <Checkbox label='Show sidebar'/>
          </div>
        </Panel>
        { this.props.children }
      </RTLayout>
    )
  }
}

export default Layout
