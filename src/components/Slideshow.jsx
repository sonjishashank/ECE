import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  { url: '/images/slide1.jpg', caption: 'ECE Department Building' },
  { url: '/images/slide2.jpg', caption: 'Student Projects Exhibition' },
  { url: '/images/slide3.jpg', caption: 'Laboratory Facilities' },
];

function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
              <p className="text-xl">{image.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;