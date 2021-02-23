import React from 'react';
import styles from './Product.module.scss';
import Button from '../../ui/Button';
import { useRouter } from 'next/router';
import Section from '../../ui/Section/Section';
import ProductImages from './ProductImages/ProductImages';
import ProductAbout from './ProductAbout/ProductAbout';
import AddToCartForm from './AddToCartForm/AddToCartForm';
import ProductHeader from './ProductHeader/ProductHeader';
export default function Product({ product }) {
  const router = useRouter();
  const { asPath } = router;

  const testFunction = async () => {
    console.log(asPath);
    const data = await fetch(`/api/product/${asPath}`, {}).then(res =>
      res.json()
    );

    console.log(data);
  };

  return (
    <div className={styles.ProductBody}>
      <div className={styles.PictureSection}>
        <ProductImages />
      </div>
      <div className={styles.Sidebar}>
        <ProductHeader />
        <AddToCartForm />
        <ProductAbout />
        <ProductDetails />
      </div>
    </div>
  );
}

const ProductDetails = () => {
  return (
    <Section header={'Product Details'}>
      <div className={styles.ProductDetails}>
        <div className={styles.DetailBlockContainer}>
          <div className={styles.DetailsLeftColumn}>
            <div className={styles.CategoryBlock}>
              <div className={styles.Spec}>
                Recent Reviews: Very Positive - 8430 user reviews
              </div>
              <div className={styles.Spec}>
                All Reviews: Very Positive - 8430 user reviews
              </div>
              <div className={styles.Spec}>
                Release Date: Dec 9 2019
              </div>
              <div className={styles.Spec}>Developer: Project Y</div>
              <div className={styles.Spec}>Publisher: Product Y</div>
            </div>
            <div className={styles.CategoryBlock}>
              <div>
                <div>Title: Product Name</div>
                <div>Genre: Action Game</div>
                <div>Artist: Casper Casanova</div>
                <div>Franchise: Some Sick Ass Brand</div>
                <div>Release Date: Dec 5 2019</div>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>View The Website</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>View The Manual</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>View The Stats</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>View Related Products</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>View Reviews</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>Find Community Groups</a>
              </div>
            </div>
            <div className={styles.CategoryBlock}>
              <Button>Add To WishList</Button>
            </div>
          </div>

          <div className={styles.DetailsRightColumn}>
            <div className={styles.CategoryBlock}>
              <div className={styles.Spec}>
                <a href={'#'}>Type: Classic Tee</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>True To Size</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>Weight: Unkown</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>ID: Unkown</a>
              </div>

              <div className={styles.Spec}>
                <a href={'#'}>Art: Screen Printed</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>Minimal Shrinkage</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>
                  {' '}
                  Incredibly soft, made with tight-knit 100% cotton
                  for everyday wear.
                </a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>
                  {' '}
                  Care Instruction: Machine wash cold. Tumble dry low.
                  Do not iron. Do not dry clean.
                </a>
              </div>
            </div>
            <div className={styles.CategoryBlock}>
              <div className={styles.Spec}>
                <a href={'#'}># of Returns: 15</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}># of Negative Reviews: Unknown</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}># of Somethings: Unknown</a>
              </div>
            </div>
            <div className={styles.CategoryBlock}>
              <h4>Is This Product Relavent To You?</h4>
              <p>
                Sign in to see reasons why you may or may not like
                this based on your games, friends, and curators you
                follow.
              </p>
              <Button>Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
