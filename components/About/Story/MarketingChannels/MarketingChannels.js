import React from 'react';
import styles from './MarketingChannels.module.scss';

let sources = [
  '(direct) / [none]',
  'google / organic',
  'served by impromtu.com/res',
  'facebook.com / referral',
  'bing / organic',
  'yahoo / organic',
  'yelp-sales-c12380',
  'ocean_wave_front.com / referral',
];

export default function MarketingChannels() {
  return (
    <div className={styles.MarketingChannels}>
      <h2>Marketing Channels</h2>
      {sources.map((src, index) => (
        <Stat key={index} source={src} />
      ))}
    </div>
  );
}

const Stat = ({ index, source, sessions }) => {
  return (
    <div className={styles.stat}>
      <div className={styles.statNames}>
        {index} {source}
      </div>
      <Session />
    </div>
  );
};

const Session = () => {
  return (
    <div className={styles.Session}>
      <div>98 + 200%</div>
      <ProgressBar percent={93} />
    </div>
  );
};

const ProgressBar = ({ percent }) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.filler}
        style={{ width: `${percent}%` }}></div>
    </div>
  );
};
