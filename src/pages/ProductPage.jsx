import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/Products/ProductCard/ProductCard';
import { data } from '../utils/data';
import './styles.scss';

const ProductPage = () => {
  const { id: productId } = useParams();

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [product] = data.products.filter(({ id }) => String(id) === productId);

  if (!product) {
    return <Redirect to="/" />;
  }

  const isProductAdded = products.indexOf(product.id) !== -1;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product.id });
  };

  return (
    <section className="product-page">
      <ProductCard data={product} mode="large" />
      <button className="btn" onClick={handleAddToCart}>
        {isProductAdded ? 'Product Added' : 'Add to cart'}
      </button>
    </section>
  );
};

export default ProductPage;
