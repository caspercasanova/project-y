import React from 'react';
import Button from '../../ui/Button';
import { useUI } from '../../ui/context';
export default function CartView() {
  const { closeSidebar } = useUI();

  return (
    <div>
      <div>
        <button onClick={closeSidebar}>Close</button>
        <div>This is the Checkout thing</div>

        <Button>Proceed To Checkout</Button>
      </div>
    </div>
  );
}
