import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedItems = [...state.items, action.item];
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.id);
      const totalAmountAfterRemoval = filteredItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return {
        items: filteredItems,
        totalAmount: totalAmountAfterRemoval,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  return (
    <CartContext.Provider value={{
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCart,
      removeItem: removeItemFromCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return React.useContext(CartContext);
};

export default CartProvider;