import React from 'react';
import { useCart } from '../../context/CartContext';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const { items: cartItems, totalAmount, removeItem, addItem } = useCart();

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    addItem({ ...item, quantity: 1 });
  };

  return (
    <Modal onClose={onClose}>
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))
        )}
      </ul>
      <div className="cart-total">
        <span>Total Amount:</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className="cart-actions">
        <button className="button close-button" onClick={onClose}>
          Close
        </button>
        {cartItems.length > 0 && (
          <button className="button checkout-button">Checkout</button>
        )}
      </div>
    </Modal>
  );
};

export default CartModal;