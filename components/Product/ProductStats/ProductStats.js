import React, { useState } from 'react';
import SimpleLineChart from '../../graphs/SimpleLineChart';
import TwoSimplePieChart from '../../graphs/TwoSimplePieChart';
import styles from './ProductStats.module.scss';
import RobinhoodNav from '../../ui/RobinhoodNav/RobinhoodNav';
import Section from '../../ui/Section/Section';

export default function ProductStats() {
  const [graph, setGraph] = useState('Total Sales');
  return (
    <Section header={'Product Stats'}>
      <div className={styles.StatsSection}>
        <RobinhoodNav
          pages={[
            { name: 'Total Sales' },
            { name: 'Something Else' },
            { name: 'Reviews' },
          ]}
          setPage={setGraph}
          currentlyActive={graph}
        />
        <section className={styles.OverallSalesContainer}>
          <div className={styles.GraphContainer}>
            <div className={styles.info}>
              <h5>Total Sales Generated</h5>
              <p>Total: $5000</p>
              <p>Net Loss: $1235</p>
              <p>Net Gain: $100</p>
              <hr />
            </div>
            <figure>
              <TwoSimplePieChart />
              <figcaption>
                This is a chart showing percentage sales compared To
                Overall Sales of Project-Y
              </figcaption>
            </figure>
          </div>
          <div className={styles.MinorSection}>
            <MinorDetail />
            <MinorDetail />
            <MinorDetail />
          </div>
        </section>
      </div>
    </Section>
  );
}

const MinorDetail = () => {
  return (
    <div className={styles.minorDetailContainer}>
      <div>Oxygyn</div>
      <div>02</div>
      <div>20.97%</div>
    </div>
  );
};
