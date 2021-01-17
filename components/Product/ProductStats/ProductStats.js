import React, { useState } from 'react';
import SimpleLineChart from '../../graphs/SimpleLineChart';
import TwoSimplePieChart from '../../graphs/TwoSimplePieChart';
import styles from './ProductStats.module.scss';

export default function ProductStats() {
  return (
    <section>
      <h3>Product Stats</h3>
      <hr />

      <section className={styles.OverallSales}>
        <div className={styles.info}>
          <h5>Total Sales Generated</h5>
          <p>Total: $5000</p>
          <p>Net Loss: $1235</p>
          <p>Net Gain: $100</p>
        </div>
        <figure>
          <TwoSimplePieChart />
          <figcaption>
            This is a chart showing percentage sales compared To
            Overall Sales of Project-Y
          </figcaption>
        </figure>
      </section>

      <div>
        <li># of Returns: Unknown</li>
        <li># of Somethings: Unknown</li>
        <li># of Negative Reviews: Unknown</li>
      </div>
      <div>
        <div>Weight: Unknown</div>
        <div>ID: Unknown</div>
      </div>
    </section>
  );
}
