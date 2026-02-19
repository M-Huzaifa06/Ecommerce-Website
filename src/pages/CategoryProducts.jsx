import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { House } from 'lucide-react';

const CategoryProducts = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) =>
      product.category
        .toLowerCase()
        .replace(/\s|&/g, "-") === categoryName
  );

  return (
    <div className="container mx-auto p-6 w-[90vw]">
      
      <h2 className="text-3xl font-bold mb-6 capitalize">
        {categoryName.replace(/-/g, " ")}
      </h2>

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

export default CategoryProducts;
