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
import playnow from '../../../assets/playnow.jpg'
import Login from '../login/LoginDialog'
import Signup from '../login/SignupDialog'


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
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      adaptiveHeight : true,
      autoplay: true,
      arrows: false,
      pauseOnHover: true,
      autoplaySpeed: 2500,
      adaptiveHeight: true
    };
    let height=Math.floor(window.innerHeight * 0.4);
    return(
    <div >
        <center>
        <h3>Rabin Chess to super apka </h3>
        <br/><br/>
        <Slider {...settings}>
				    <div><center><img height={height} src={andrzej}></img></center></div>
				    <div><center><img height={height} src={stonoga2}></img></center></div>
				    <div><center><img height={height} src={stonoga3}></img></center></div>
				    <div><center><img height={height} src={stonoga4}></img></center></div>
				    <div><center><img height={height} src={stonoga5}></img></center></div>
		    </Slider>
        <br/><br/>
        <p>blablabla</p>
        <br/><br/>
        <Grid >
          <Row>
            <Col sm={6}><h2> Try it now !</h2></Col>
            <Col sm={6}><Login/></Col>
          </Row>
          <Row>
            <Col lg={10}><h2> or</h2></Col>
          </Row>
          <Row>
            <Col sm={6}><h2>Sign up !</h2></Col>
            <Col sm={6}><Signup/></Col>
          </Row>
        </Grid>
        <br/><br/>
        <p>blablabla</p>
        <br/><br/>
        <a href="/#/board"><img height={height} src={playnow} /></a>
        </center>
    </div>
	);
  }
}
