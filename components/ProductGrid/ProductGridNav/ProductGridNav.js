import React from 'react';
import styles from './ProductGridNav.module.scss';
import { useUI } from '../../ui/context';

export default function ProductGridNav() {
  const { openModal, setModalView } = useUI();

  return (
    <div className={styles.GridNav}>
      <input />
      <button
        onClick={() => {
          setModalView('FILTERS_VIEW');
          openModal();
        }}>
        Filters{' '}
      </button>
    </div>
  );
}
