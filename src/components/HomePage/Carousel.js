import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1697555347107_movies.jpg'></img>
      </div>
      <div>
        <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1697784852917_edsheerandesktoprevised.jpg'></img>
      </div>
      <div>
        <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1695984008899_icccricketwcoctdesktop.jpg'></img>
      </div>
      <div>
        <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1699618284313_diwalidesktop.jpg'></img>
      </div>
    </Slider>
  );
};

export default Carousel;
