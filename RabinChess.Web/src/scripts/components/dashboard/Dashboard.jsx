import React from 'react'
import Slider from 'react-slick'
import stonoga1 from '../../../assets/stonoga1.jpg'
import stonoga2 from '../../../assets/stonoga2.jpg'
import stonoga3 from '../../../assets/stonoga3.jpg'
import stonoga4 from '../../../assets/stonoga4.jpg'
import stonoga5 from '../../../assets/stonoga5.jpg'


/**
* Main page dashboard
*/
export default class Dashboard extends React.Component{

  /**
  * Renders dashboard
  * return {div} Div with Slider
  */
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
      autoplaySpeed: 2000,
      adaptiveHeight: true
    };
    let height=Math.floor(window.innerHeight * 0.4);
    return(
    <div >
        <Slider {...settings}>
				    <div><center><img height={height} src={stonoga1}></img></center></div>
				    <div><center><img height={height} src={stonoga2}></img></center></div>
				    <div><center><img height={height} src={stonoga3}></img></center></div>
				    <div><center><img height={height} src={stonoga4}></img></center></div>
				    <div><center><img height={height} src={stonoga5}></img></center></div>
		    </Slider>
    </div>
	);
  }
}
