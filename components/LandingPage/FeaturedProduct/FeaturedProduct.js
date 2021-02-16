import React from 'react';
import styles from './FeaturedProduct.module.scss';
import Image from 'next/image';
import SimpleLineChart from '../../graphs/SimpleLineChart';
export default function FeaturedProduct() {
  return (
    <section className={styles.Featured_Product_Section}>
      <header>
        <h1>Featured Product</h1>
      </header>
      <div className={styles.Body}>
        <div className={styles.leftContainer}>
          <div className={styles.description}>
            <p>
              You can use the Stripe API in test mode, which does not
              affect your live data or interact with the banking
              networks. The API key you use to authenticate the
              request determines whether the request is live mode or
              test mode.
            </p>
            <p>
              You can use the Stripe API in test mode, which does not
              affect your live data or interact with the banking
              networks. The API key you use to authenticate the
              request determines whether the request is live mode or
              test mode.
            </p>
          </div>
          <div className={styles.LineChart}>
            <SimpleLineChart />
          </div>
          <div className={styles.description}>
            <p>
              You can use the Stripe API in test mode, which does not
              affect your live data or interact with the banking
              networks. The API key you use to authenticate the
              request determines whether the request is live mode or
              test mode.
            </p>
            <p>
              You can use the Stripe API in test mode, which does not
              affect your live data or interact with the banking
              networks. The API key you use to authenticate the
              request determines whether the request is live mode or
              test mode.
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}>
            <img
              src={
                'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/efecb485-62e8-406d-b09c-4ec2426eef6d/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 
https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/87c00b51-729b-47a6-a1dd-850bad3454a5/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23955103-b4e4-41e3-8314-e5cee3b5c909/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/18d81d74-e537-406e-bd89-0227d5b53b8a/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cca8e45b-9dac-414e-bb98-5aa51ac62f77/sportswear-heritage-windrunner-mens-corduroy-jacket-VdJfdz.jpg

*/


/* Fleece Pants
https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9db5b14f-0b6d-4eca-84a8-ff93597b99ea/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b294e575-ea67-465a-99ce-923d42990eb4/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2f9fd3ad-7ba2-424e-b5d9-2d5f067c5302/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b294e575-ea67-465a-99ce-923d42990eb4/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg

https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2f9fd3ad-7ba2-424e-b5d9-2d5f067c5302/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg

https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4db89cb4-874d-4ef4-92f9-4dc4843f2d44/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg

https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/193772c2-0f96-45e3-bbf2-7f9a2e7be343/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1e3c68e7-fccf-48ae-84e6-7e43ace2582c/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1a8d37c1-8ccd-464b-bfd8-95424b509de4/sportswear-club-fleece-mens-cargo-pants-hZtP5V.jpg
*/


/* Windrunner Wild Run

https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3ccc82f4-b533-4950-a866-b31849cd6732/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg



https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ec5f4eaf-9159-44bf-934e-e5ed26aba1c4/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg


https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a5db5e9b-e27d-4df3-ad55-1576f9a4b027/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg

https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b9c86c8-772f-4583-8727-9a79d3881589/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg

https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/214b29b3-465a-408c-bffe-fc3aecb1f2ec/windrunner-wild-run-mens-running-jacket-zNTnc6.jpg
*/