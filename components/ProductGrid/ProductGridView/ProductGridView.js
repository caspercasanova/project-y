import Main from '../../ui/Main/Main';
import ProductGrid from '../ProductGrid/ProductGrid';
import ProductGridNav from '../ProductGridNav/ProductGridNav';
export default function ProductGridView() {
  return (
    <Main>
      <ProductGridNav />
      <ProductGrid />
    </Main>
  );
}
