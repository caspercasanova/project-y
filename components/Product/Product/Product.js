import React from 'react';
import Image from 'next/image';
import styles from './Product.module.scss';
import Button from '../../ui/Button';
import { useRouter } from 'next/router';
import Section from '../../ui/Section/Section';
import Tag from '../../ui/Tag/Tag';
// import ProductSlider from './ProductSlider/ProductSlider'

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
    <>
      <Section header={'Product Name'} className={styles.Product}>
        <div className={styles.ProductBody}>
          <header className={styles.ProductHeader}>
            <div className={styles.ProductHeaderMain}>
              <div>
                <h2>$420.69</h2>
                <h5>+$9.10 (+1.47%) Today</h5>
              </div>
              <div>
                <div>
                  Recent Reviews: Very Positive - 8430 user reviews
                </div>
                <div>
                  All Reviews: Very Positive - 8430 user reviews
                </div>
                <div>Release Date: Dec 9 2019</div>
                <div>Developer: Rockstar Games</div>
                <div>Publisher: Rockstar Games</div>
              </div>
            </div>
            <div>
              Popular User Defined Tags for this product.
              <div className={styles.tagContainer}>
                <Tag>Sick</Tag>
                <Tag>Leading The Charge</Tag>
                <Tag>Spearhead</Tag>
                <Tag>Str8 WestCoastin</Tag>
                <Tag>Feeling Rich</Tag>
              </div>
            </div>
          </header>
          <ImageCarousel />
          {/* <ProductSlider /> */}
          <div className={styles.ButtonContainer}>
            <button
              onClick={testFunction}
              className={styles.AddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </Section>
      <ProductAbout />
    </>
  );
}

const ImageCarousel = () => {
  return (
    <div>
      <figure className={styles.Image_Card}>
        <img src={'/images/eazy_e.png'} alt={'Product Image'} />
      </figure>
    </div>
  );
};

const ProductAbout = () => {
  return (
    <>
      <Section header={'About'}>
        <div className={styles.AboutBody}>
          <p>REMEMBER THE ROSWELL RAYGUNS IN VERSATILE COMFORT. </p>
          <p>
            In the early '00s, Nike Basketball created a fake '70s-era
            basketball team for some fun, funky TV spots.
          </p>
          <p>
            The Nike Rayguns Basketball T-Shirt is a play on those old
            ads with the "Roswell Rayguns" alien logo. It's made from
            soft, comfortable cotton with a relaxed fit.
          </p>
          <p>
            Rayguns Alien Logo The large "Roswell Rayguns" alien logo
            comes from the memorable Nike Basketball commercials made
            back in the early '00s.
          </p>
          <p>
            Easy, Everyday Comfort Everyday cotton fabric feels soft
            and lightweight. The fit is relaxed and easy to wear with
            a versatile shape.
          </p>
        </div>
      </Section>
      <ProductDetails />
    </>
  );
};

const ProductDetails = () => {
  return (
    <Section header={'Product Details'}>
      <div className={styles.ProductDetails}>
        <div className={styles.DetailBlockContainer}>
          <div className={styles.DetailsLeftColumn}>
            <div className={styles.CategoryBlock}>
              <div className={styles.Spec}>
                <a href={'#'}>Single Player</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>Online PvP</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>Steam Achievements</a>
              </div>
              <div className={styles.Spec}>
                <a href={'#'}>In-App Purchases</a>
              </div>
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
