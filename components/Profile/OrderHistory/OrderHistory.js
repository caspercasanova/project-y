import React from 'react';
import styles from './OrderHistory.module.scss';

export default function OrderHistory() {
  return (
    <div>
      <h2>This is the order History</h2>
    </div>
  );
}

const Product = () => {
  return (
    <div key={index} style={{ display: 'flex' }}>
      <div>
        <img
          style={{ width: '100px' }}
          src={product.img}
          alt={`product${index}`}
        />
      </div>
      <div>
        <div>Product Name: </div>
        <div>Quantity: </div>
        <div>Product Price: </div>
        <div>Total: </div>
      </div>
    </div>
  );
};
