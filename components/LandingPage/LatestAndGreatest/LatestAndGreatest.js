import React from 'react';
import styles from './Latest.module.scss';
import LatestProductCard from './LatestProductCard/LatestProductCard';
import Section from '../../ui/Section/Section';

export default function LatestAndGreatest() {
  let srcs = [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/yyjhddg0pvgakilmltek/free-x-metcon-2-mens-training-shoe-9s2JzN.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0a29a305-f9d9-4025-ad9a-35d6267e649b/sb-heritage-vulc-skate-shoe-JH6qWt.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/m2vt3p7uhmgadyjkvrw9/sb-zoom-stefan-janoski-mid-crafted-skate-shoe-M85vpQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9f9a47ac-cb6c-437c-bab5-2015d42a46e8/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/59494d45-92b5-4650-8c6b-6af6a3da0bdc/air-max-90-slide-ch384n.jpg',
  ];
  return (
    <Section header={'The Latest & Greatest'}>
      <div className={styles.Latest_And_Greatest_Section}>
        <div className={styles.Latest_And_Greatest_Body}>
          <LatestProductCard src={srcs[0]} />
          <LatestProductCard src={srcs[1]} />
          <LatestProductCard src={srcs[2]} />
          <LatestProductCard src={srcs[3]} />
          <LatestProductCard src={srcs[4]} />
          <LatestProductCard src={srcs[1]} />
        </div>
      </div>
    </Section>
  );
}
