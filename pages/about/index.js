import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import AboutView from '../../components/About/AboutView/AboutView';
import Container from '../../components/ui/Container/Container';
import styles from '../../styles/Home.module.scss';
export default function About() {
  return (
    <Container>
      <Header />
      <AboutView />
      <Footer />
    </Container>
  );
}
