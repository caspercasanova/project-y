import React from 'react';
import SimpleLineChart from '../../graph/SimpleLineChart';
import TwoSimplePieChart from '../../graph/TwoSimplePieChart';

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
    </section>
  );
}
