import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  console.log(products);

  return (
    <section>
      {!products && <h1>Your cart is empty</h1>}

      {products && (
        <div>
          Are you ready to purchase these?
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CartPage;
