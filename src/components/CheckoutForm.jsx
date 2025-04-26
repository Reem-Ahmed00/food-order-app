import { useContext } from "react";
import { CartContext } from "../context/cartContext.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useFormInput from "../hooks/useFormInput.jsx";

const CheckoutForm = ({ showModal, toggle }) => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const name = useFormInput("");
  const email = useFormInput("");
  const address = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", {
      name: name.value,
      email: email.value,
      address: address.value,
    });
    clearCart();
    toggle();
  };

  return (
    <Modal show={showModal} onHide={toggle} centered>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" {...name} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" {...email} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" {...address} required />
            </Form.Group>
            <div className="text-center">
              <h4>Total Amount: ${getCartTotal().toFixed(2)}</h4>
            </div>
            <div className="text-center mt-3">
              <Button variant="success" type="submit">
                Place Order
              </Button>
            </div>
          </Form>
        ) : (
          <div className="text-center">
            <h4>Your cart is empty</h4>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutForm;