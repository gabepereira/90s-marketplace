import { addToCart, removeFromCart, clearCart } from './cartAction';

describe('when cartAction is in use', () => {
  test('should add item to cart when ADD_TO_CART is called', () => {
    const id = 1;
    const action = {
      type: 'ADD_TO_CART',
      payload: id,
    };
    expect(addToCart(id)).toEqual(action);
  });

  test('should remove item from cart when REMOVE_FROM_CART is called', () => {
    const id = 1;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
    expect(removeFromCart(id)).toEqual(action);
  });

  test('should clear cart when CLEAR_CART is called', () => {
    const action = {
      type: 'CLEAR_CART',
    };
    expect(clearCart()).toEqual(action);
  });
});
