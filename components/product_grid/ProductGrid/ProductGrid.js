import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';

let windRunnerJacket = {
  name: 'Wind Runner Jacket',
  price: '$420.69',
  pics: [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/87c00b51-729b-47a6-a1dd-850bad3454a5/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23955103-b4e4-41e3-8314-e5cee3b5c909/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/18d81d74-e537-406e-bd89-0227d5b53b8a/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cca8e45b-9dac-414e-bb98-5aa51ac62f77/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg',
  ],
};

let fleecePants = {
  name: 'Camo Fleecers',
  price: '$420.69',
  pics: [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9db5b14f-0b6d-4eca-84a8-ff93597b99ea/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b294e575-ea67-465a-99ce-923d42990eb4/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2f9fd3ad-7ba2-424e-b5d9-2d5f067c5302/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b294e575-ea67-465a-99ce-923d42990eb4/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2f9fd3ad-7ba2-424e-b5d9-2d5f067c5302/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4db89cb4-874d-4ef4-92f9-4dc4843f2d44/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/193772c2-0f96-45e3-bbf2-7f9a2e7be343/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1e3c68e7-fccf-48ae-84e6-7e43ace2582c/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1a8d37c1-8ccd-464b-bfd8-95424b509de4/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg',
  ],
};

let windRunnerWildRun = {
  name: 'Wind Runner Wild Run',
  price: '$420.69',
  pics: [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3ccc82f4-b533-4950-a866-b31849cd6732/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ec5f4eaf-9159-44bf-934e-e5ed26aba1c4/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a5db5e9b-e27d-4df3-ad55-1576f9a4b027/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b9c86c8-772f-4583-8727-9a79d3881589/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/214b29b3-465a-408c-bffe-fc3aecb1f2ec/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg',
  ],
};

let jordanDeltas = {
  name: 'Jordan Deltas',
  price: '$420.69',
  pics: [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d0167e75-a627-49a5-aea8-5f6dfb9a81fc/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0/ab8c7e18-5816-42ee-be84-2c9cdc173f37/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/94372d7f-fd3a-4736-9f7d-c57d4f69e30a/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bfa1e59a-baf4-42a9-aa58-f56723399fb9/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8a5a652f-fafb-4844-9174-2e14f3de6bfa/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/41994e6d-51b7-4be1-8abe-891a3cc660f9/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7634c8c2-355d-4efc-902d-f7a012066591/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cf91ad5a-c119-4b46-ac0c-1af213bd4925/jordan-delta-mens-shoe-jpSKRQ.jpg',
  ],
};

let samples = [
  jordanDeltas,
  windRunnerWildRun,
  fleecePants,
  windRunnerJacket,
];
export default function ProductGrid() {
  let products = new Array(10)
    .fill(1)
    .map(
      item =>
        (item = samples[Math.floor(Math.random() * samples.length)])
    );
  return (
    <section className={styles.Product_Grid}>
      {products.map((
        product,
        index // This is where were add a link to a dynamic product
      ) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
}
