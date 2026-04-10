import { Link } from "react-router-dom";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import HoverMenu from "./Wash&Wear";
import { useState } from "react";

const Header = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center w-[90vw]">
        <div className="text-2xl font-bold text-gray-800">MyShop</div>
        <nav className="hidden lg:flex items-center">
          <Link to="/">
            <button className="hover:bg-[#8B4E12]  hover:text-white px-6 py-2 rounded-full font-medium cursor-pointer">
              Home
            </button>
          </Link>
          <Link to="/category/shawls">
            <button className="hover:bg-[#8B4E12]  hover:text-white px-6 py-2 rounded-full font-medium cursor-pointer">
              Shawls
            </button>
          </Link>
          <Link to="/category/wallets">
            <button className="hover:bg-[#8B4E12]  hover:text-white px-6 py-2 rounded-full font-medium cursor-pointer">
              Wallets
            </button>
          </Link>
          <Link to="/category/perfumes">
            <button className="hover:bg-[#8B4E12]  hover:text-white px-6 py-2 rounded-full font-medium cursor-pointer">
              Perfumes
            </button>
          </Link>
          <Link to="/category/boski">
            <button className="hover:bg-[#8B4E12]  hover:text-white px-6 py-2 rounded-full font-medium cursor-pointer">
              Boski
            </button>
          </Link>
          
          <HoverMenu />

          <Link to="/products">
            <button className="hover:bg-[#8B4E12]  hover:text-white px-6 py-2 rounded-full font-medium cursor-pointer">
              Products
            </button>
          </Link>
        </nav>
          {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-gray-600 hover:text-gray-800"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white  px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block mobile-link">Home</Link>
          <Link to="/category/shawls" onClick={() => setIsOpen(false)} className="block mobile-link">Shawls</Link>
          <Link to="/category/wallets" onClick={() => setIsOpen(false)} className="block mobile-link">Wallets</Link>
          <Link to="/category/perfumes" onClick={() => setIsOpen(false)} className="block mobile-link">Perfumes</Link>
          <Link to="/category/boski" onClick={() => setIsOpen(false)} className="block mobile-link">Boski</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block mobile-link">Products</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
