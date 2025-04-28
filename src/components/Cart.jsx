import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext.jsx";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import CheckoutForm from "./CheckoutForm.jsx";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const toggleCheckout = () => {
    setShowCheckoutModal(!showCheckoutModal);
  };

  return (
    <Modal show={showModal} onHide={toggle} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>{" "}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="text-center mt-3">
              <h4>Total: ${getCartTotal().toFixed(2)}</h4>
              <Button variant="warning" onClick={clearCart} className="mt-2">
                Clear Cart
              </Button>
            </div>
          </>
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
        <Button
          variant="success"
          onClick={toggleCheckout}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
        <CheckoutForm showModal={showCheckoutModal} toggle={toggleCheckout} />
      </Modal.Footer>
    </Modal>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
