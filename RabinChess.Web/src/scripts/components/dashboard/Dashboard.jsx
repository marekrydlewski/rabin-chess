import React from 'react'
import {browserHistory} from 'react-router'
import {Button, Link} from 'react-toolbox'
import Slider from 'react-slick'
import {Grid, Row, Col} from 'react-flexbox-grid'
import andrzej from '../../../assets/andrzej.jpg'
import stonoga2 from '../../../assets/rabin1.jpg'
import stonoga3 from '../../../assets/rabin2.jpg'
import stonoga4 from '../../../assets/rabin3.jpg'
import stonoga5 from '../../../assets/rabin4.jpg'
import playnow from '../../../assets/playnowbutton.jpg'
import Login from '../login/LoginDialog'
import Signup from '../login/SignupDialog'

import style from './dashboard_style'

export default class Dashboard extends React.Component{

static contextTypes= {
    router: React.PropTypes.object.isRequired
};

constructor(props, context) {
  super(props, context);
}

_onClick(){
browserHistory.push('/board');
}

  render() {
    let divStyle ={
      backgroundImage: 'url("../../../assets/3.jpg")',
    };
    let borderStyle ={
      //borderImage: 'url("../../../assets/border.png") 30 stretch'
    };
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      autoplay: true,
      arrows: false,
      pauseOnHover: true,
      autoplaySpeed: 2500,
      adaptiveHeight: true,
      draggable: true
    };
    let height=Math.floor(window.innerHeight * 0.4);
    return(
    <div style={divStyle} className={style['content']}>
      <div clasName={style['boxbuttons']}>
        <div style={borderStyle} className={style['box']} >
          <div className={style['boxtitle']}>
            Rabin Chess to super apka
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div id={style['buttons']}>
          <Login/>
          <Signup/>
          <div id={style['playbutton']}>
            <a href="/#/board"><img id={style['playnow']} src={playnow} /></a>
          </div>
        </div>
      </div>
      <div className={style['playslider']}>
          <div id={style['borderimg']} className={style['slider']} >
            <Slider {...settings}>
				        <div><img className={style['sliderimg']} height={height} src={andrzej}></img></div>
				        <div><img className={style['sliderimg']} height={height} src={stonoga2}></img></div>
				        <div><img className={style['sliderimg']} height={height} src={stonoga3}></img></div>
				        <div><img className={style['sliderimg']} height={height} src={stonoga4}></img></div>
				        <div><img className={style['sliderimg']} height={height} src={stonoga5}></img></div>
		        </Slider>
          </div>
      </div>
    </div>

	);
  }
}
