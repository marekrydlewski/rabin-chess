import React from 'react'
import Slider from 'react-slick';

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
				<div><center><img height="500" src="http://x3.cdn03.imgwykop.pl/c3201142/comment_u5GN5LE2tHHpV8EbymMwFAuKSopqo06z.jpg"></img></center></div>
				<div><center><img height="500" src="http://fs.cdn.smcloud.net/hotplota.prod/Mo2052352t642.jpg"></img></center></div>
				<div><center><img height="500" src="http://i1.wp.com/pressmix.eu/wp-content/uploads/2015/06/Zbigniew-Stonoga.jpg"></img></center></div>
				<div><center><img height="500" src="http://stonoga-zbigniew.pl/wp-content/uploads/2015/09/zbigniew-stonoga-na-zywo.jpg"></img></center></div>
				<div><center><img height="500" src="http://stonoga-zbigniew.pl/wp-content/uploads/2015/07/11693928-177698896919444-d24c36620.jpg"></img></center></div>
		   </Slider>
	</div>
	);
  }
}
