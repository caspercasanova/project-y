import React from 'react';
import NewReleases from './NewReleases/NewReleases';
import LatestAndGreatest from './LatestAndGreatest/LatestAndGreatest';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import ApplyToBeAModel from './ApplyToBeAModel/ApplyToBeAModel';
import LandingBanner from './LandingBanner/LandingBanner';
import JoinBanner from './JoinBanner/JoinBanner';
import Section from '../ui/Section/Section';
import LargePictureCard from '../ui/LargePictureCard/LargePictureCard';
export default function LandingPage() {
  return (
    <>
      <LandingBanner />
      <LatestAndGreatest />
      <Section header={'Get Ready To Sweat'}>
        <LargePictureCard
          src={
            'https://static.nike.com/a/images/f_auto/dpr_1.0/w_613,c_limit/4dd3e7e1-3a51-459a-b8a8-be6e2c42b1fa/nike-just-do-it.jpg'
          }
        />
        <LargePictureCard
          src={
            'https://static.nike.com/a/images/f_auto/w_1920,c_limit/c169949b-6929-4df6-bfe9-76e8696d9901/image.jpg'
          }
        />
      </Section>
      <FeaturedProduct />
      <Section header={'Featured Footwear'}>
        <LargePictureCard
          src={
            'https://static.nike.com/a/images/f_auto/dpr_1.0/w_613,c_limit/607a4132-a3b4-45e1-bef1-9b4e372f1b47/nike-just-do-it.jpg'
          }
        />
        <LargePictureCard
          src={
            'https://static.nike.com/a/images/f_auto/dpr_1.0/w_613,c_limit/79e3bea0-d28d-4cbc-b054-65c95f874a2c/nike-just-do-it.jpg'
          }
        />
      </Section>
      <JoinBanner />
    </>
  );
}

// style='background-image: url("https://static.nike.com/a/images/f_auto/w_1920,c_limit/c169949b-6929-4df6-bfe9-76e8696d9901/image.jpg");'

{
  /* 
<NewReleases />
<ApplyToBeAModel /> */
}
