import React from 'react';
import Image from 'next/image';
export default function ProductDisplay({ product }) {
  return (
    <section>
      <div>
        <figure>
          <Image
            src={'./images/projectY.png'}
            alt={'Product Image'}
            width={400}
            hieght={400}
          />
        </figure>
        <div></div>
      </div>
      <aside>
        <div>Product Name</div>
        <div>Price</div>
        <div>
          <a href="#sizechart">Size Chart</a>
        </div>
        <div>
          <button>Add To Cart</button>
          <button>Subscribe</button>
        </div>
        <div>
          <ul>
            {product.type == 'shirt' && ShirtDetails}
            {product.type == 'hat' && HatDetails}
          </ul>
        </div>
      </aside>
    </section>
  );
}
const ShirtDetails = () => {
  return (
    <>
      <li>Classic Tee</li>
      <li>True to size</li>
      <li>Screen Print</li>
      <li>
        Incredibly soft, made with tight-knit 100% cotton
        for everyday wear.
      </li>
      <li>
        Care Instruction: Machine wash cold. Tumble dry low.
        Do not iron. Do not dry clean.
      </li>
      <li>Minimal Shrinkage</li>
    </>
  );
};

const HatDetails = () => {
  return (
    <>
      <li>One size fits all</li>
      <li>Quality embroidery</li>
      <li>Curved bill</li>
      <li>Adjustable strap</li>
      <li>Hand wash/Hang Dry</li>
    </>
  );
};
