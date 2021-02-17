import React, { useState, useRef } from 'react';

export default function Carousel({ children }) {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 3,
    mode: 'free-snap',
    spacing: 15,
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
