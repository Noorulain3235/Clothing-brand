import React from "react";
import { ProductCard2 } from "./common/card";

import { products2 } from "../constant/index"; 




// ✅ Main items
export default function Aboutus2() {
 

  return (
    <div className="relative min-h-screen py-10 bg-white">
      

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 justify-items-center">
        {products2.map((product, index) => (
          <ProductCard2 key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
