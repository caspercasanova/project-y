import React from 'react';

export default function ProductStats() {
  const [toggle, toggleGraph] = useState(false);

  return (
    <section>
      <div>Product Stats</div>
      <div>
        {toggle ? (
          <figure>
            <img
              src="pic_trulli.jpg"
              alt="Trulli"
              style="width:100%"></img>
            <figcaption>
              This is the Sales Charted accros the past 2
              weeks
            </figcaption>
          </figure>
        ) : (
          <figure>
            <img
              src="pic_trulli.jpg"
              alt="Trulli"
              style="width:100%"></img>
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
