import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/Products/ProductCard/ProductCard';
import { data } from '../utils/data';

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const filteredProducts = data.products.filter((product) =>
    products.includes(product.id)
  );

  return (
    <section className="product-page">
      {!products.length && <h1>Your cart is empty</h1>}

      {!!filteredProducts.length && (
        <div>
          <h1>Are you ready to purchase these?</h1>
          <button className="btn" onClick={clearCart}>
            Clear
          </button>

          <ul>
            {filteredProducts.map((product) => (
              <>
                <ProductCard key={product.id} data={product} mode="list-item" />

                <button
                  className="btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CartPage;
