import React from 'react';
import NewReleases from './NewReleases/NewReleases';
import LatestProductCard from './LatestProductCard/LatestProductCard';
import LatestAndGreatest from './LatestAndGreatest/LatestAndGreatest';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import ApplyToBeAModel from './ApplyToBeAModel/ApplyToBeAModel';
import LandingBanner from './LandingBanner/LandingBanner';
export default function LandingPage() {
  return (
    <>
      <LandingBanner />
      <FeaturedProduct />
      {/* <LatestAndGreatest />
      <NewReleases />
      <LatestProductCard />
      <ApplyToBeAModel /> */}
    </>
  );
}
