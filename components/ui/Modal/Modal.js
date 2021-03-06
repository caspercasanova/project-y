import React, { useRef, useEffect, useCallback } from 'react';
import Portal from '@reach/portal';
import styles from './Modal.module.scss';
import Cross from '../../icons/Cross.tsx';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

export default function Modal({ children, onClose, open, onEnter }) {
  const ref = useRef();
  const handleKey = useCallback(
    e => {
      if (e.key === 'Escape') {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
        window.addEventListener('keydown', handleKey);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      clearAllBodyScrollLocks();
    };
  }, [open, handleKey]);

  return (
    <Portal>
      {open ? (
        <div className={styles.backgroundOverlay}>
          <div className={styles.modalCard} ref={ref}>
            <div className={styles.modalHeader}>
              <button onClick={onClose} aria-label="Close Modal">
                <Cross />
              </button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </Portal>
  );
}
