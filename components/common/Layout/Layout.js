import styles from './Layout.module.scss';

import { FeatureBar, Header, Footer } from '@components/common';
import { SignInView } from '@components/auth';
import { FiltersView } from '@components/product_grid';
import { useAcceptCookies } from '../../../lib/hooks/useAcceptedCookies';
import { useRouter } from 'next/router';
import { useUI } from '@components/ui/context';
import { CartView } from '@components/cart';

import Modal from '../../ui/Modal/Modal';
import Main from '../../ui/Main/Main';
import Button from '../../ui/Button/Button';
import Sidebar from '../../ui/Sidebar/Sidebar';
// TODO: ADD FEATURES AND COMMERCE PROVIDER AND POSSIBLY A NEW CONTAINER

export default function Layout({ children }) {
  const {
    displayModal,
    closeModal,
    modalView,
    closeSidebar,
    displaySidebar,
  } = useUI();
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  console.log(acceptedCookies, displaySidebar);
  const { locale = 'en-US' } = useRouter();

  return (
    <div className={styles.LayoutContainer}>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'LOGIN_VIEW' && <SignInView />}
        {modalView === 'FILTERS_VIEW' && <FiltersView />}
      </Modal>

      <Sidebar onClose={closeSidebar} open={displaySidebar}>
        <CartView />
      </Sidebar>

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
