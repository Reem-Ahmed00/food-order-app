import React from 'react';
import './MealItem.css';

const MealItem = ({ meal, onAddToCart }) => {
  const { id, name, description, price } = meal;

  const addToCartHandler = () => {
    onAddToCart({ id, name, price, quantity: 1 });
  };

  return (
    <div className="meal-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price ? price.toFixed(2) : 'N/A'}</p>
      <button className="button add-to-cart" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default MealItem;