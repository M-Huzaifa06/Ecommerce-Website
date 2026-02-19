import { products } from "../data/products"
import { Link } from "react-router-dom"

const CollectionCards = ({ cardsRef }) => {
  // Get unique categories only
  const categories = [...new Set(products.map(item => item.category))]

  return (
    <div ref={cardsRef} className='flex gap-5 items-center overflow-hidden w-full'>
      {categories.map((category, index) => {
        // Get first product of that category for image
        const categoryProduct = products.find(p => p.category === category)

        return (
          <Link 
            key={index}
            to={`/category/${category.toLowerCase()}`}
            className='w-67 overflow-hidden shrink-0 hover:underline cursor-pointer'
          >
            <img 
              src={categoryProduct.image} 
              alt={category} 
              className='rounded-2xl'
            />

            <h3 className='text-xl font-bold text-center mt-2'>
              {category}
            </h3>
          </Link>
        )
      })}
    </div>
  )
}

export default CollectionCards
