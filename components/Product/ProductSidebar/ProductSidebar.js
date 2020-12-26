import React from 'react';
import TinyLineChart from '../../graphs/TinyLineChart';
import styles from './ProductSidebar.module.scss';

export default function ProductSidebar() {
  return (
    <aside>
      <div className={styles.Sidebar_Form_Container}>
        <form>
          <div>Product Name</div>
          <div>Price</div>
          <div>Current Version</div>
          <hr />
          <TinyLineChart />
          <div>
            <a href="#sizechart">Size Chart</a>
          </div>
        </form>
        <hr />
        <div>$0.00 Buying Power Available</div>
      </div>
      <div className={styles.Sidebar_Buttons}>
        <button className={styles.Sidebar_Button}>
          Add To Cart
        </button>
        <button className={styles.Sidebar_Button}>
          Wishlist
        </button>
      </div>
    </aside>
  );
}
