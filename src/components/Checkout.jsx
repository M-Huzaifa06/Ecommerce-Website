import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, getTotal } = useCart();
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed! (Mock checkout)');
    // Integrate with payment API here
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <p className="mb-4">Total: ${getTotal()}</p>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded w-full cursor-pointer">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;