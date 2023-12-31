import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({sliderContent}) {
	var settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	
	return (
		<Slider {...settings}>
			{sliderContent}
		</Slider>
	);
}