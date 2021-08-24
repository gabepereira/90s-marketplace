import cartReducer from './cartReducer';

describe('cartReducer', () => {
  test('should return the initial state for default action', () => {
    expect(cartReducer(undefined, {})).toEqual({ products: [] });
  });

  test('should add product to cart when ADD_TO_CART is called', () => {
    const id = 1;
    const action = {
      type: 'ADD_TO_CART',
      payload: id,
    };
    const state = {
      products: [],
    };
    expect(cartReducer(state, action)).toEqual({
      ...state,
      products: [...state.products, id],
    });
  });

  test('should remove product from cart when REMOVE_FROM_CART action is called', () => {
    const id = 1;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
    const state = {
      products: [id, 2, 3],
    };
    expect(cartReducer(state, action)).toEqual({
      ...state,
      products: state.products.filter((item) => item !== id),
    });
  });

  test('should clear cart when CLEAR_CART action is called', () => {
    const action = {
      type: 'CLEAR_CART',
    };
    const state = {
      products: [1, 2, 3],
    };
    expect(cartReducer(state, action)).toEqual({
      ...state,
      products: [],
    });
  });
});
