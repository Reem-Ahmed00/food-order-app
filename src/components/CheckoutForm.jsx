import { useContext, useState } from 'react';
import { useCart } from '../../context/CartContext';

const CheckoutForm = () => {
  const { items:cartItems, totalAmount, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Order submitted:', formData);
    clearCart(); // Clear the cart after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;