import React from 'react';
import Section from '../../../ui/Section/Section';
import styles from './ProductAbout.module.scss';

export default function ProductAbout() {
  return (
    <Section header={'About'}>
      <div className={styles.CategoryBlock}>
        <p>REMEMBER THE ROSWELL RAYGUNS IN VERSATILE COMFORT. </p>
        <p>
          In the early '00s, Nike Basketball created a fake '70s-era
          basketball team for some fun, funky TV spots.
        </p>
        <p>
          The Nike Rayguns Basketball T-Shirt is a play on those old
          ads with the "Roswell Rayguns" alien logo. It's made from
          soft, comfortable cotton with a relaxed fit.
        </p>
        <p>
          Rayguns Alien Logo The large "Roswell Rayguns" alien logo
          comes from the memorable Nike Basketball commercials made
          back in the early '00s.
        </p>
        <p>
          Easy, Everyday Comfort Everyday cotton fabric feels soft and
          lightweight. The fit is relaxed and easy to wear with a
          versatile shape.
        </p>
      </div>
    </Section>
  );
}
