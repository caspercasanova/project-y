import React, { useState } from 'react';
import Settings from '../Settings/Settings';
import OrderHistory from '../OrderHistory/OrderHistory';
import Main from '../../ui/Main/Main';
import RobinhoodNav from '../../ui/RobinhoodNav/RobinhoodNav';

const purchasesArrayDefault = [
  {
    productList: [
      { name: 'NewSenseCap', quantity: 2, price: 1200 },
      {
        name: 'Keep Dreaming',
        quantity: 2,

        price: 1200,
      },
    ],
    dateOrdered: '2020-07-12',
    orderNumber: '123lkhasdjo1i23u09as8dlkj12',
    orderComplete: false,
    hasShipped: true,
    orderPrice: '$123.00',
    pointsEarned: '20',
    discountsApplied: 'None',
  },
  {
    productList: [
      { name: 'NewSenseCap', quantity: 2, price: 1200 },
      {
        name: 'Keep Dreaming',
        quantity: 2,

        price: 1200,
      },
    ],
    dateOrdered: '2020-10-12',
    orderNumber: '123lkhasdjo1i23u09as8dlkj12',
    orderComplete: false,
    hasShipped: false,
    orderPrice: '$123.00',
    pointsEarned: '20',
    discountsApplied: 'None',
  },
];

export default function ProfileView() {
  const [page, setPage] = useState('Order History');

  return (
    <Main>
      <RobinhoodNav
        setPage={setPage}
        currentlyActive={page}
        pages={[{ name: 'Order History' }, { name: 'Settings' }]}
      />

      {page == 'Order History' && <OrderHistory />}
      {page == 'Settings' && <Settings />}
    </Main>
  );
}
