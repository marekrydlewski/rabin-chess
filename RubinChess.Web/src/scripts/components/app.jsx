import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>My awesome app</h1>
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}
