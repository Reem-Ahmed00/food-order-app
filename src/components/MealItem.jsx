import React, { useState, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion, AnimatePresence } from "framer-motion";

export default function MealItem({ meal }) {
  const { addToCart } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);
  const cartRef = useRef(null);

  const handleAddToCart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      addToCart(meal);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div style={{ position: "relative" }}>
      <Card
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Img
          variant="top"
          src={meal.image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{meal.name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${meal.price}
          </Card.Text>
        </Card.Body>
        <div style={{ padding: "10px" }}>
          <Button variant="success" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card>

      <AnimatePresence>
        {isAnimating && (
          <motion.img
            src={meal.image}
            alt={meal.name}
            initial={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100px",
              height: "100px",
              opacity: 1,
            }}
            animate={{
              x: cartRef.current?.getBoundingClientRect().x || 0,
              y: cartRef.current?.getBoundingClientRect().y || 0,
              width: "50px",
              height: "50px",
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              zIndex: 1000,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
