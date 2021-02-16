import React from 'react';
import ProfileView from '../../components/Profile/ProfileView/ProfileView';
import Container from '../../components/ui/Container/Container';
import Layout from '../../components/common/Layout/Layout';
export default function Profile() {
  return (
    <Container>
      <Layout>
        <ProfileView />
      </Layout>
    </Container>
  );
}
