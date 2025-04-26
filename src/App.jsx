import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import MealsList from './components/Meals/MealsList';
import CartModal from './components/Cart/CartModal';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <header className="app-header">
        <h1>Food Order App</h1>
        <button className="cart-button" onClick={openCartHandler}>
          Open Cart
        </button>
      </header>
      <main>
        <MealsList />
        {isCartOpen && <CartModal onClose={closeCartHandler} />}
      </main>
    </CartProvider>
  );
}

export default App;