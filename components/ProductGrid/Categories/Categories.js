import React from 'react';
import styles from './Categories.module.scss';
import Tag from '../../ui/Tag/Tag';

export default function Categories() {
  return (
    <div className={styles.categories}>
      <Tag>LifeStyle</Tag>
      <Tag>Running</Tag>
      <Tag>BasketBall</Tag>
      <Tag>Football</Tag>
      <Tag>Soccer</Tag>
      <Tag>Training & Gym</Tag>
      <Tag>Skateboard</Tag>
      <Tag>Track and Field</Tag>
      <Tag>Walking</Tag>
      <Tag>Shoes Under $100</Tag>
    </div>
  );
}
