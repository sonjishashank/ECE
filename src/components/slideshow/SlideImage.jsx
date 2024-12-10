import React from 'react';
import PropTypes from 'prop-types';

export function SlideImage({ url, caption }) {
  return (
    <div className="relative h-[500px]">
      <img
        src={url}
        alt={caption}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
        <p className="text-xl">{caption}</p>
      </div>
    </div>
  );
}

SlideImage.propTypes = {
  url: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};