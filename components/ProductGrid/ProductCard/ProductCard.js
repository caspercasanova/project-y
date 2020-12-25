import React from 'react';
import Image from 'next/image';
export default function ProductCard() {
  const [isHover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div>
        <Image
          src={'/images/eazy_e.png'}
          width={350}
          height={350}
          alt={'product_img'}
        />
      </div>
      {isHover ? <ImageCards /> : <QuickInfo />}
      <div>Price</div>
    </div>
  );
}

const ImageCards = () => {
  <div>
    <Image
      src={'/images/eazy_e.png'}
      width={350}
      height={350}
      alt={'lil img'}
    />
  </div>;
};
const QuickInfo = () => {
  <div>
    <div>Just In</div>
    <div>Sick ass hat</div>
    <div>1 size fits all</div>
    <div>5 color</div>
  </div>;
};
