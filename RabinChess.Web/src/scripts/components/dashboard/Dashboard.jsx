import React from 'react'
import Slider from 'react-slick';
import stonoga1 from '../../../assets/stonoga1.jpg'
import stonoga2 from '../../../assets/stonoga2.jpg'
import stonoga3 from '../../../assets/stonoga3.jpg'
import stonoga4 from '../../../assets/stonoga4.jpg'
import stonoga5 from '../../../assets/stonoga5.jpg'

export default class Dashboard extends React.Component{
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
      arrows: false
    };
    return(
	<div>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
		   <Slider {...settings}>
				<div><center><img height="500" src={stonoga1}></img></center></div>
				<div><center><img height="500" src={stonoga2}></img></center></div>
				<div><center><img height="500" src={stonoga3}></img></center></div>
				<div><center><img height="500" src={stonoga4}></img></center></div>
				<div><center><img height="500" src={stonoga5}></img></center></div>
		   </Slider>
	</div>
	);
  }
}
