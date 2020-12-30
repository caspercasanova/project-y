import React, { useState } from 'react';
import Settings from '../Settings/Settings';
import OrderHistory from '../OrderHistory/OrderHistory';

export default function ProfileView() {
  const [page, setPage] = useState('orderhistory');

  return (
    <div>
      <nav>
        <button onClick={() => setPage('orderhistory')}>
          orderhistory
        </button>
        <button onClick={() => setPage('settings')}>settings</button>
      </nav>

      {page == 'orderhistory' && <OrderHistory />}
      {page == 'settings' && <Settings />}
    </div>
  );
}
