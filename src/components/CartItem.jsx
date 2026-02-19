import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-200 px-2 py-1 rounded"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;