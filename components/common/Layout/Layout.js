import React from 'react';
import Modal from '../../ui/Modal/Modal';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../ui/Main/Main';
import SignInView from '../../SignInView/SignInView';
import FiltersView from '../../ProductGrid/FiltersView/FiltersView';

import { useUI } from '../../ui/context';
// TODO: ADD FEATURES AND API PROVIDER AND POSSIBLY CONTAINER

export default function Layout({ children }) {
  const { displayModal, closeModal, modalView } = useUI();
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'LOGIN_VIEW' && <SignInView />}
        {modalView === 'FILTERS_VIEW' && <FiltersView />}
      </Modal>
    </div>
  );
}
