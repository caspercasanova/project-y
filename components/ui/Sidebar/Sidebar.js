import React from 'react';
import Portal from '@reach/portal';
import { useEffect, useRef } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import styles from './Sidebar.module.scss';

export default function Sidebar({ children, open = false, onClose }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  return (
    <Portal>
      {open ? (
        <div ref={ref} className={styles.sideBar}>
          <div className={styles.background} />
          <div className={styles.paneContainer}>
            <div className={styles.leftPane} onClick={onClose} />
            <section className={styles.cartPane}>{children}</section>
          </div>
        </div>
      ) : null}
    </Portal>
  );
}
