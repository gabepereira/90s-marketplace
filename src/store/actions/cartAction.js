export const addToCart = (data) => {
  return {
    type: 'ADD_TO_CART',
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: data,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};
