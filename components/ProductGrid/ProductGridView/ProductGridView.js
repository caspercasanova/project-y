import Main from '../../ui/Main/Main';
import ProductGrid from '../ProductGrid/ProductGrid';
import ProductGridNav from '../ProductGridNav/ProductGridNav';
import Categories from '../Categories/Categories';
export default function ProductGridView() {
  return (
    <Main>
      <ProductGridNav />
      <Categories />
      <ProductGrid />
    </Main>
  );
}
