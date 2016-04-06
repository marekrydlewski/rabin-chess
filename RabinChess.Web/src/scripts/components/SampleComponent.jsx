import React from 'react'
import style from './sample_component.scss'

/**
 * SampleComponent class
 */
export default class SampleComponent extends React.Component {
  /**
   * Display div
   * @return {div} Routed thing
   */
  render() {
    return (
      <div className={ style['sample'] }>Routed thing</div>
    )
  }
}
