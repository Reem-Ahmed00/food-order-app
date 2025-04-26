import { useState, useEffect, useContext, useRef } from "react";
import MealItem from "./MealItem";
import { CartContext } from "../context/cartContext.jsx";
import Cart from "./Cart.jsx";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MealsList() {
  const [meals, setMeals] = useState(null);
  const { cartItems } = useContext(CartContext);
  const [showCartModal, setShowCartModal] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setShowCartModal(!showCartModal);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        const mealsWithPrices = data.recipes.map((meal) => ({
          ...meal,
          price: (Math.random() * (20 - 5) + 5).toFixed(2),
        }));
        setMeals(mealsWithPrices);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="d-flex justify-content-between mb-3">
            <Button ref={cartRef} variant="primary" onClick={toggleCart}>
              Cart ({cartItems.length})
            </Button>
          </div>
          <Cart showModal={showCartModal} toggle={toggleCart} />
          <Row>
            {meals &&
              meals.map((meal) => (
                <Col key={meal.id} md={6} lg={4} className="mb-4">
                  <MealItem meal={meal} cartRef={cartRef} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
