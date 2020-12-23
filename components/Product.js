import React from 'react';

export default function ProductPage() {
  return (
    <div>
      <ProductDisplay />
      <ProductStats />
    </div>
  );
}

const ProductStats = () => {
  return (
    <section>
      <div>Product Stats</div>
    </section>
  );
};

const ProductDisplay = ({ product }) => {
  return (
    <section>
      <div>Picture Display</div>
      <div>
        Product Name
        <div></div>
        <div></div>
        <div>
          <a href="#sizechart">Size Chart</a>
        </div>
        <div>
          <ul>
            {product.type == 'shirt' && ShirtDetails}
            {product.type == 'hat' && HatDetails}
          </ul>
        </div>
      </div>
    </section>
  );
};
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
