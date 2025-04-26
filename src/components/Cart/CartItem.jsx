import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <div className="cart-item__details">
        <span>Quantity: {item.quantity}</span>
        {/* <span>Price: ${item.price.toFixed(2)}</span> */}
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;