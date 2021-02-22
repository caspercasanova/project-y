import '../styles/globals.scss';
import { ManagedUIContext } from '../components/ui/context';

function MyApp({ Component, pageProps }) {
  return (
    <ManagedUIContext>
      <Component {...pageProps} />
    </ManagedUIContext>
  );
}

export default MyApp;
