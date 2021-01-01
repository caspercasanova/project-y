import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import ProfileView from '../../components/Profile/ProfileView/ProfileView';
import Container from '../../components/ui/Container/Container';
export default function Profile() {
  return (
    <Container>
      <Header />
      <ProfileView />
      <Footer />
    </Container>
  );
}
