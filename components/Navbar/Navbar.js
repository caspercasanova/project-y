import React from 'react';
import Link from 'next-link';

export default function Navbar() {
  return (
    <div>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <div>
        <Link to={'/profile'}>About</Link>
      </div>
      <div>
        <Link to={'/products'}>Products</Link>
      </div>
      <div>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  );
}
