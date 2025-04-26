import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';
import { useCart } from '../../context/CartContext';
import './MealsList.css';

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://dummyjson.com/recipes'); // Replace with your API endpoint
      const data = await response.json();
      setMeals(data.recipes || []); // Adjust based on the actual structure
    };

    fetchMeals();
  }, []);

  return (
    <div className="meals-list">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} onAddToCart={addItem} />
      ))}
    </div>
  );
};

export default MealsList;