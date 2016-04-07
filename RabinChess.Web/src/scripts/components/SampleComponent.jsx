import React from 'react'
import style from './sample_component.scss'
import {Grid, Row, Col} from 'react-flexbox-grid'
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
      <div className={style['sample']}>
        <Grid>
          <Row>
            <Col className={style['col1']} xs={6} md={3}>Hello, world!</Col>
            <Col className={style['col2']} xs={6} md={3}>Hello, world!</Col>
            <Col className={style['col3']} xs={6} md={3}>Hello, world!</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
