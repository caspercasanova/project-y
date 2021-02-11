import React, { Children, useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styles from './ProductSlider.module.scss'
// export default function ProductSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);
//   const sliderContainerRef = useRef(null);

//   const [ref, slider] = useKeenSlider({
//     loop: true,
//     slidesPerView: 1,
//     mounted: () => setIsMounted(true),
//     slideChanged(s) {
//       setCurrentSlide(s.details().relativeSlide);
//     },
//   });

//   // Stop the history navigation gesture on touch devices
//   useEffect(() => {
//     const preventNavigation = event => {
//       // Center point of the touch area
//       const touchXPosition = event.touches[0].pageX;
//       // Size of the touch area
//       const touchXRadius = event.touches[0].radiusX || 0;

//       // We set a threshold (10px) on both sizes of the screen,
//       // if the touch area overlaps with the screen edges
//       // it's likely to trigger the navigation. We prevent the
//       // touchstart event in that case.
//       if (
//         touchXPosition - touchXRadius < 10 ||
//         touchXPosition + touchXRadius > window.innerWidth - 10
//       )
//         event.preventDefault();
//     };

//     sliderContainerRef?.current?.addEventListener(
//       'touchstart',
//       preventNavigation
//     );

//     return () => {
//       sliderContainerRef?.current?.removeEventListener(
//         'touchstart',
//         preventNavigation
//       );
//     };
//   }, []);

//   return (
//     <div ref={sliderContainerRef}>
//       <button
//         className={}
//         onClick={slider?.prev}
//         aria-label="Previous Product Image"
//       />
//       <button
//         className={}
//         onClick={slider?.prev}
//         aria-label="Next Product Image"
//       />
//       <div ref={ref} style={{ opacity: isMounted ? 1 : 0 }}>
//         {Children.map(children, child => {
//           // Add the keen-slider__slide className to children
//           if (isValidElement(child)) {
//             return {
//               ...child,
//               props: {
//                 ...child.props,
//                 className: `${
//                   child.props.className
//                     ? `${child.props.className} `
//                     : ''
//                 }keen-slider__slide`,
//               },
//             };
//           }
//           return child;
//         })}
//       </div>
//       {slider && (
//         <div className={cn(s.positionIndicatorsContainer)}>
//           {[...Array(slider.details().size).keys()].map(idx => {
//             return (
//               <button
//                 aria-label="Position indicator"
//                 key={idx}
//                 className={cn(s.positionIndicator, {
//                   [s.positionIndicatorActive]: currentSlide === idx,
//                 })}
//                 onClick={() => {
//                   slider.moveToSlideRelative(idx);
//                 }}>
//                 <div className={s.dot} />
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


export default function ProductSlider(props){
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <>
      <div className={styles.navigation_wrapper}>
        <div ref={sliderRef} className={styles.keen_slider}>
          <div className={styles.keen_slider__slide, styles.number_slide1}>1</div>
          <div className={styles.keen_slider__slide, styles.number_slide2}>2</div>
          <div className={styles.keen_slider__slide, styles.number_slide3}>3</div>
          <div className={styles.keen_slider__slide, styles.number_slide4}>4</div>
          <div className={styles.keen_slider__slide, styles.number_slide5}>5</div>
          <div className={styles.keen_slider__slide, styles.number_slide6}>6</div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className={styles.dots}>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </>
  )
}




function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={styles.arrow, styles.arrow__left + styles.disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={styles.arrow, styles.arrow__right + styles.disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}
