import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { ChevronDown } from 'lucide-react';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Get unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto p-6 w-[90vw]">
      <div className="flex justify-between mb-5">
        <h2 className="text-3xl font-bold mb-5">Products</h2>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="
            appearance-none
            bg-white
            py-2 pl-4 pr-10
            border border-gray-300
            rounded-xl
            font-medium
            cursor-pointer
            focus:outline-none
            focus:ring-2 focus:ring-[#292928]
            "
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Custom Arrow */}
          <span className="absolute right-3 top-1/3 -translate-y-1/3 pointer-events-none text-gray-500">
            <ChevronDown />
          </span>
        </div>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
