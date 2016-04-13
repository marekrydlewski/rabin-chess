import { AppBar, App } from 'react-toolbox';
import { Button, Card } from 'react-toolbox';
import { Grid, Row, Col} from 'react-flexbox-grid'
import React from 'react';
import style from './../../styles/main_layout';
import chessboard from 'chessboardjs'
import ChessBoard from  './chessboard/ChessBoard'

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <AppBar className={style['header']}>
                  <img className={style['logo']} src='./logo.png'/>
                  <h1>Rabin Chess</h1>
                </AppBar>
                <Card className={style['menu']}>
                  <Button  className={style['menuItem']}><p className={style['menuItem']}>Clear</p></Button>
                  <Button className={style['menuItem']}><p className={style['menuItem']}>Start</p></Button>
                </Card>
                { this.props.children }
                <footer className={style['footer']}>
                  <h5 className={style['text']}>Software Engineering Project</h5>
                </footer>
            </div>
        )
    }
}
