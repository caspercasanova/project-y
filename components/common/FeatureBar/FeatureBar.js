import React from 'react';
import styles from './FeatureBar.module.scss';
export default function FeatureBar({
  description,
  title,
  action,
  hide,
}) {
  return (
    <div
      className={
        hide == true
          ? `${styles.featureBar} ${styles.hide}`
          : styles.featureBar
      }>
      <span>{title}</span>
      <span>{description}</span>
      {action && action}
    </div>
  );
}
