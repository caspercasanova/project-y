import React from 'react';
import styles from './Field.module.scss';

const Field = ({
  id,
  label,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
  error,
}) => {
  return (
    <div className={styles.FieldContainer}>
      <label className={styles.Label} htmlFor={id} error={error}>
        {error ? error : label}
        {required ? '*' : null}
      </label>
      <input
        className={styles.Input}
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
