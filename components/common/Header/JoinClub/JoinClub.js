import React from 'react';
import styles from './JoinClub.module.scss';
export default function JoinClub() {
  return (
    <div className={styles.JoinClubContainer}>
      <div className={styles.JoinClubCarouselWrapper}>
        <div className={styles.JoinClubCarousel}>
          <ul>
            <li>
              <div>Need A Last Minute Gift?</div>
              <a href={'#'}>
                Geet a digital Gift Card here
              </a>
            </li>
            <li>
              <div>Special Deal If U Subscribe!</div>
              <a href={'#'}>
                Geet a digital Gift Card here
              </a>
            </li>
            <li>
              <div>Special Deal If U Subscribe!</div>
              <a href={'#'}>
                Geet a digital Gift Card here
              </a>
            </li>
            <li>
              <div>Special Deal If U Subscribe!</div>
              <a href={'#'}>
                Geet a digital Gift Card here
              </a>
            </li>
          </ul>
          <button className={styles.LeftButton}>
            <i className={(styles.arrow, styles.left)}></i>
          </button>
          <button className={styles.RightButton}>
            <i className={(styles.arrow, styles.right)}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
