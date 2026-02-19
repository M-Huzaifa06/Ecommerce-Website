import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Checkout from "./components/Checkout";
import CategoryProducts from './pages/CategoryProducts';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-[44vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;