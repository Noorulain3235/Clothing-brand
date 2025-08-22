import React, { useState } from "react";
import ProductCard from "../../Components/common/card";
import { products as productsData, products2 as products2Data } from "../../constant/index";
import { ProductCard2 } from "../../Components/common/card";

export default function ProductList() {
  const [sortOption, setSortOption] = useState("default");

  // Sorting function 
 const sortProducts = (products) => {
  console.log("Current sort option:", sortOption); 
  return [...products].sort((a, b) => {
    if (sortOption === "low-high") return a.price - b.price;
    if (sortOption === "high-low") return b.price - a.price;
    if (sortOption === "latest") return Number(b.id) - Number(a.id);
    if (sortOption === "popularity") return Number(a.id) - Number(b.id);
    if (sortOption === "average rating") return Number(b.id) - Number(a.id);

    return 0;
  });
};


  const sortedProducts = sortProducts(productsData);
  const sortedProducts2 = sortProducts(products2Data);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        {/* Header with dropdown */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing all {productsData.length + products2Data.length} results
          </p>

          <select
            className="border border-gray-300 rounded px-3 py-2 text-gray-700"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="average rating">Sort by average rating</option>
            <option value="latest">Sort by latest</option>
            <option value="low-high">Sort by price: low to high</option>
            <option value="high-low">Sort by price: high to low</option>
          </select>
        </div>

        {/* First Products Grid */}
        <div className="relative min-h-screen py-10 ">
          <div className="grid grid-cols-2 md:mb-8 md:sm:grid-cols-2 md:lg:grid-cols-4 
          gap-2 md:gap-4 px-8 justify-items-center">
            {sortedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Second Products Grid */}
      <div className="relative min-h-screen py-10 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 justify-items-center">
          {sortedProducts2.map((product, index) => (
            <ProductCard2 key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
