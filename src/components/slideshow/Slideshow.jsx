import React from 'react';
import Slider from 'react-slick';
import { SlideImage } from './SlideImage';
import { sliderSettings } from '../../utils/sliderSettings';
import { slideImages } from '../../utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slideshow() {
  const settings = {
    ...sliderSettings,
    beforeChange: () => {
      // Prevent memory leaks by cleaning up timeouts
      if (window.sliderTimeout) {
        clearTimeout(window.sliderTimeout);
      }
    }
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      <Slider {...settings}>
        {slideImages.map((image, index) => (
          <SlideImage key={index} {...image} />
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;