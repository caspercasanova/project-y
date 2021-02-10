import React, { Children, useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sliderContainerRef = useRef(null);

  const [ref, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  // Stop the history navigation gesture on touch devices
  useEffect(() => {
    const preventNavigation = event => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX;
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0;

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault();
    };

    sliderContainerRef?.current?.addEventListener(
      'touchstart',
      preventNavigation
    );

    return () => {
      sliderContainerRef?.current?.removeEventListener(
        'touchstart',
        preventNavigation
      );
    };
  }, []);

  return (
    <div ref={sliderContainerRef}>
      <button
        className={}
        onClick={slider?.prev}
        aria-label="Previous Product Image"
      />
      <button
        className={}
        onClick={slider?.prev}
        aria-label="Next Product Image"
      />
      <div ref={ref} style={{ opacity: isMounted ? 1 : 0 }}>
        {Children.map(children, child => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className
                    ? `${child.props.className} `
                    : ''
                }keen-slider__slide`,
              },
            };
          }
          return child;
        })}
      </div>
      {slider && (
        <div className={cn(s.positionIndicatorsContainer)}>
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                aria-label="Position indicator"
                key={idx}
                className={cn(s.positionIndicator, {
                  [s.positionIndicatorActive]: currentSlide === idx,
                })}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}>
                <div className={s.dot} />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
