import React from 'react';
import Modal from '../../ui/Modal/Modal';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../ui/Main/Main';
import Button from '../../ui/Button/Button';
import SignInView from '../../SignInView/SignInView';
import FiltersView from '../../ProductGrid/FiltersView/FiltersView';
import styles from './Layout.module.scss';
import { useUI } from '../../ui/context';
import { useAcceptCookies } from '../../../lib/hooks/useAcceptedCookies';
import FeatureBar from '../FeatureBar/FeatureBar';
// TODO: ADD FEATURES AND COMMERCE PROVIDER AND POSSIBLY A NEW CONTAINER

export default function Layout({ children }) {
  const { displayModal, closeModal, modalView } = useUI();
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  console.log(acceptedCookies);
  return (
    <div className={styles.LayoutContainer}>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'LOGIN_VIEW' && <SignInView />}
        {modalView === 'FILTERS_VIEW' && <FiltersView />}
      </Modal>
      <FeatureBar
        title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        hide={acceptedCookies}
        action={
          <Button onClick={() => onAcceptCookies()}>
            Accept Cookies
          </Button>
        }
      />
    </div>
  );
}
