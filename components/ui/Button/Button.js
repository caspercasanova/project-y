import React from 'react';

export default function Button({
  onClick,
  type,
  loading,
  children,
}) {
  return (
    <button onClick={onClick}>
      {children}
      {loading && <i>..Loading..</i>}
    </button>
  );
}
