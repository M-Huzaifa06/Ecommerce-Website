import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      {" "}
      {/*  ADD THIS */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl w-full"
          />

          {product.discount && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Save {product.discount}%
            </span>
          )}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            bg-black text-white px-4 py-2 rounded-full
            opacity-0 group-hover:opacity-100
            transition-all duration-300
            hover:bg-white cursor-pointer hover:text-black
          "
        >
          Add to Cart
        </button>
      </div>
      <h3 className="text-lg font-semibold mt-4 text-center">{product.name}</h3>
      <p className="text-gray-600 text-center mb-2">{product.description}</p>
      <div className="flex items-center gap-2 mt-1 justify-center">
        <span className="font-semibold">${product.price}</span>
        {product.oldPrice && (
          <span className="line-through text-gray-400">
            ${product.oldPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
