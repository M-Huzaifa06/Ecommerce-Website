import React, { useState } from "react";

const products = [
  {
    title: "Boski by HM",
    price: 120,
    image:
      "https://bilalmarth7.pk/cdn/shop/files/7_1_11zon_1_11zon.webp?v=1768199851&width=1080",
  },
  {
    title: "Ice-Cool by HM",
    price: 220,
    image:
      "https://bilalmarth7.pk/cdn/shop/files/6_2_11zon.webp?v=1768202577&width=1080",
  },
  {
    title: "Boski by HM",
    price: 160,
    discount: "50",
    oldPrice: 320,
    image:
      "https://bilalmarth7.pk/cdn/shop/files/6_9e01678b-74cc-4c1f-a917-c816562db0fc_11zon.webp?v=1768029649&width=1080",
  },
  {
    title: "Boski by HM",
    price: 120,
    image:
      "https://bilalmarth7.pk/cdn/shop/files/7_1_11zon_1_11zon.webp?v=1768199851&width=1080",
  },
  {
    title: "Ice-Cool by HM",
    price: 220,
    image:
      "https://bilalmarth7.pk/cdn/shop/files/6_2_11zon.webp?v=1768202577&width=1080",
  },
  {
    title: "Boski by HM",
    price: 320,
    discount: "50",
    oldPrice: 160,
    image:
      "https://bilalmarth7.pk/cdn/shop/files/6_9e01678b-74cc-4c1f-a917-c816562db0fc_11zon.webp?v=1768029649&width=1080",
  },
];

const TrendingProducts = () => {
  const [viewAll, setViewAll] = useState(false);

  const visibleProducts = viewAll ? products : products.slice(0, 4);

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
          Trending Products
        </h2>

        {/* Products Grid */}
        <div className="w-full">
          <div className="grid 
                          grid-cols-2 
                          sm:grid-cols-2 
                          md:grid-cols-3 
                          lg:grid-cols-4 
                          gap-4 sm:gap-6 lg:gap-8">

            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl flex flex-col transition hover:scale-105 duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-2xl w-full `h-[180px]` `sm:h-[250px]` object-cover"
                  />

                  {item.discount && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                      Save {item.discount}%
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-3 font-semibold text-sm sm:text-base text-center">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center gap-2 mt-1 text-sm sm:text-base">
                  <span className="font-semibold">${item.price}</span>

                  {item.oldPrice && (
                    <span className="line-through text-gray-400 text-xs sm:text-sm">
                      ${item.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setViewAll(!viewAll)}
          className="mt-8 border rounded-full px-8 py-2 hover:bg-black hover:text-white transition duration-300"
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default TrendingProducts;