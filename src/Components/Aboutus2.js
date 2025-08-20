import React from "react";

// ✅ Product Card component
const ProductCard = ({ product }) => {
  return (
    <div className="font-sans max-w-sm w-full bg-white overflow-hidden group">
      {/* Image */}
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 md:h-80 object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-3 text-center">
        <p className="text-gray-400 text-xs md:text-sm">{product.category}</p>
        <h3 className="text-sm md:text-base font-serif text-gray-600 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-800 text-sm md:text-base font-bold mb-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

// ✅ Main Component
export default function About1() {
  const products = [
    {
      name: "Professional Pinstripe Blazer",
      category: " Activewear",
      price: 124.9,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-02-a-600x731.jpg`,
    },
    {
      name: "Relaxed Fit Joggers",
      category: "Work & Office",
      price: 89.5,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-07-a-600x731.jpg`,
    },
    {
      name: "Urban Chic Ensemble",
      category: "Evening Dresses",
      price: 110.0,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-04-a-600x731.jpg`,
    },
    {
      name: "Weekend Wenderlust Wardrobe",
      category: "Activewear",
      price: 149.99,
      imageUrl: `${process.env.PUBLIC_URL}/images/img-03-a-600x731.jpg`,
    },
  ];

  return (
    <div className="relative min-h-screen py-10 bg-white">
      

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
