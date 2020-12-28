import React, { useState } from 'react';
import SimpleLineChart from '../../graphs/SimpleLineChart';
import TwoSimplePieChart from '../../graphs/TwoSimplePieChart';

export default function ProductStats() {
  const [toggle, toggleGraph] = useState('false');

  return (
    <section>
      <div>Product Stats</div>
      <div>
        <button onClick={() => toggleGraph(true)}>
          LineChart
        </button>
        <button onClick={() => toggleGraph(false)}>
          PieChart
        </button>
      </div>
      <div>
        {toggle ? (
          <figure>
            <SimpleLineChart />
            <figcaption>
              This is the Sales Charted accros the past 2
              weeks
            </figcaption>
          </figure>
        ) : (
          <figure>
            <TwoSimplePieChart />
            <figcaption>
              This is a chart showing percentage sales
              compared To Overall Sales of Project-Y
            </figcaption>
          </figure>
        )}
      </div>
      <div>
        <li># of Returns</li>
        <li></li>
        <li># of Negative Reviews</li>
      </div>
    </section>
  );
}
