import React, { useState } from 'react';
import styles from './JoinClub.module.scss';
import Ticker from 'react-ticker';
import useInterval from '../../../../lib/hooks/useInterval';
export default function JoinClub() {
  return (
    <div className={styles.JoinClubContainer}>
      <div className={styles.JoinClubCarouselWrapper}>
        <div className={styles.JoinClubCarousel}>
          <Ticker mode={'smooth'} speed={15}>
            {() => <TickerElement />}
          </Ticker>
        </div>
      </div>
    </div>
  );
}

const TickerElement = () => {
  const [currIdx, setCurrIdx] = useState(0);

  useInterval(() => {
    if (currIdx + 1 == 3) {
      setCurrIdx(0);
    } else {
      setCurrIdx(currIdx + 1);
    }
  }, 15000);

  return (
    <ul>
      {currIdx == 0 && (
        <li>
          <div>Wana Rep & Earn Some Dough?</div>
          <a href={'#'}>Become a Model</a>
        </li>
      )}

      {currIdx == 1 && (
        <li>
          <div>Stay Up Homie.</div>
          <a href={'#'}>Project Y on the Come Up</a>
        </li>
      )}

      {currIdx == 2 && (
        <li>
          <div>Need A Last Minute Gift?</div>
          <a href={'#'}>Geet a digital Gift Card here</a>
        </li>
      )}
    </ul>
  );
};
