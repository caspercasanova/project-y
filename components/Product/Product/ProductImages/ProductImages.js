import React from 'react';
import styles from './ProductImages.module.scss';
export default function ProductImages() {
  let pics = [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d0167e75-a627-49a5-aea8-5f6dfb9a81fc/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0/ab8c7e18-5816-42ee-be84-2c9cdc173f37/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/94372d7f-fd3a-4736-9f7d-c57d4f69e30a/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bfa1e59a-baf4-42a9-aa58-f56723399fb9/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8a5a652f-fafb-4844-9174-2e14f3de6bfa/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/41994e6d-51b7-4be1-8abe-891a3cc660f9/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7634c8c2-355d-4efc-902d-f7a012066591/jordan-delta-mens-shoe-jpSKRQ.jpg',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cf91ad5a-c119-4b46-ac0c-1af213bd4925/jordan-delta-mens-shoe-jpSKRQ.jpg',
  ];
  return (
    <div className={styles.ImagesContainer}>
      {pics.map(src => (
        <Picture src={src} />
      ))}
    </div>
  );
}

const Picture = ({ src }) => {
  return (
    <div className={styles.lg_img}>
      <img src={src} />
    </div>
  );
};
