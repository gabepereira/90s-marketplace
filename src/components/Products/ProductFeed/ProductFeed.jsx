import ProductCard from '../ProductCard/ProductCard';
import { data } from '../../../utils/data';
import './styles.scss';

const ProductFeed = () => {
  const { products } = data;

  console.log(products);

  return (
    <div data-testid="ProductFeed" className="feed">
      <h1>Welcome to our shop!</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
