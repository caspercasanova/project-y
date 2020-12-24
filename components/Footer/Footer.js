import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <section className={styles.FooterBody}>
        <div className={styles.links}>
          <a href={'#'}>Returns/Shipping</a>
          <a href={'#'}>Contact Us</a>
          <a href={'#'}>Terms & Conditions</a>
          <a href={'#'}>FAQS</a>
        </div>
        <div className={styles.logo}>
          <div>
            <Image
              src="/images/projectY.png"
              alt="projectY_logo"
              height={70}
              width={70}
            />
            <div>© {currYear} Project-Y</div>
          </div>
        </div>
        <JoinEmailList />
      </section>
    </footer>
  );
}

const JoinEmailList = () => {
  return (
    <div className={styles.JoinEmailContainer}>
      <div>Become a Project-Y Member</div>
      <div>
        Subscribe to receive updates, access to exclusive
        deals, and more.
      </div>
      <div>
        <input type="text"></input>
        <div>Email Icon</div>
      </div>
    </div>
  );
};
