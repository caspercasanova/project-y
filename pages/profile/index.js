import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import ProfileView from '../../components/Profile/ProfileView/ProfileView';

export default function Profile() {
  return (
    <div>
      <Header />
      <ProfileView />
      <Footer />
    </div>
  );
}
