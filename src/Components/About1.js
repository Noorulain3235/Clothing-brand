import React from "react";
import ProductCard from "./common/card"; 
import { products } from "../constant/index"; 

export default function About1() {
  return (
    <div className="relative min-h-screen py-10 bg-white">
      <div className="grid grid-cols-2 md:mb-8 md:sm:grid-cols-2 md:lg:grid-cols-4 
      gap-2 md:gap-4 px-8 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
