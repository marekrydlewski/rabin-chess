import React from 'react'

/**
 * App class
 */
export default class App extends React.Component {
  /**
   * Display heading
   * @return {h1} My awesome app
   */
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
