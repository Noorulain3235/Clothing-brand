import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";



export default function Shop() {
    return (
        <>
            {/* front image */}
            <div className="relative w-full h-[300px] md:h-[550px] lg:h-[580px] top-0 z-0">
                <img
                    src={`${process.env.PUBLIC_URL}/images/about-bg1.jpeg`}
                    alt="Hero"
                    className="absolute w-full h-full object-cover md:object-fill"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                    <div className="w-[90%] md:w-[70%] flex flex-col items-center">
                        <h1 className="text-3xl md:text-7xl mt-2 font-medium font-serif italic">
                            Shop Now
                        </h1>
                        <div className="flex items-center justify-center mt-4">
                             <Link
                            to="/"
                            className="  text-white py-1
                            text-sm font-semibold"
                        >
                           Home
                        </Link>
                          <span className="ml-1 text-xs">{">>"}</span>



                          <p className="text-white py-1
                            text-sm font-semibold ml-2">
                            Shop
                          </p>

                        </div>
                    </div>
                </div>
            </div>


            <Dropdown/>
        </>
    );
}