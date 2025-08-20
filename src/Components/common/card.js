import React, { useState } from "react";
import { Link } from "react-router-dom";
import { colorClassMap } from "../../constant";

// Helper function for slug
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

// ✅ First Product Card
const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState("M");

  const activeImage = product.colors.find(
    (c) => c.name === selectedColor
  )?.imageUrl;

  const productSlug = slugify(product.name);

  return (
    <div className="font-sans max-w-sm w-full bg-white overflow-hidden group">
      {/* Image with link */}
      <div className="relative">
        <Link to={`/products/${productSlug}`}>
          <img
            src={activeImage}
            alt={`${product.name} in ${selectedColor}`}
            className="w-full h-32 md:h-80 object-fill cursor-pointer"
          />
        </Link>
      </div>

      {/* Details */}
      <div className="p-3 text-center">
        <p className="text-gray-400 text-xs md:text-sm">{product.category}</p>
        <h3 className="text-sm md:text-base font-serif text-gray-600 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm md:text-base font-bold mb-2">
          ${product.price.toFixed(2)}
        </p>

        {/* Sizes */}
        <div className="flex justify-center items-center space-x-2 mb-2 md:mb-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-4 h-4 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm font-medium border transition-colors
                ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Colors */}
        <div className="flex justify-center items-center space-x-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-300
                 transition-transform duration-200
                ${colorClassMap[color.name]}
                ${
                  selectedColor === color.name
                    ? "ring-2 ring-offset-2 ring-black"
                    : ""
                }`}
              aria-label={`Select color ${color.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Second Product Card (simpler one)
const ProductCard2 = ({ product }) => {
  const productSlug = slugify(product.name);

  return (
    <div className="font-sans max-w-sm w-full bg-white overflow-hidden group">
      {/* Image with link */}
      <div className="relative">
        <Link to={`/products/${productSlug}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-32 md:h-80 object-cover cursor-pointer"
          />
        </Link>
      </div>

      {/* Details */}
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

// ✅ Export both
export default ProductCard;
export { ProductCard2 };
