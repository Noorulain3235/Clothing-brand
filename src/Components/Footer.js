import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>

            <div className="relative w-full bg-white text-black py-8 px-4 text-center">
                <div className="flex flex-col md:flex-row justify-center mt-7  gap-10">

                    {/* 1 */}
                    <div className="flex flex-col px-4 text-start w-[270px]">
                        
                         <h1 className="text-lg  font-serif mb-4">
                            Menu
                        </h1>

                        <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Home
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Shop
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            About Us
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* 2 */}
                   <div className="flex flex-col px-4 text-start w-[270px]">
                        
                         <h1 className="text-lg  font-serif mb-4">
                            Categories
                        </h1>

                        <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Casual
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Work & Office
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Activewear
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Evening Dresses
                        </Link>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col px-4 text-start w-[270px]">
                        
                         <h1 className="text-lg  font-serif mb-4">
                            Resources
                        </h1>

                        <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Contact Support
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            FAQ
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Live Chat
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                           Returns
                        </Link>
                    </div>

                    {/* 4 */}
                      <div className="flex flex-col px-4 text-start w-[170px]">
                        
                         <h1 className="text-lg  font-serif mb-4">
                            Social Media
                        </h1>

                        <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Facebook
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Twitter
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                            Instagram
                        </Link>

                         <Link
                            to="/"
                            className="  text-gray-500 py-1   hover:text-gray-800
                            text-sm font-semibold"
                        >
                           Pinterest
                        </Link>
                    </div>
                </div>
                <div className="border-t border-solid border-gray-400 my-4"></div>
                <p className="text-base font-semibold text-gray-500">
                    Copyright © 2025 Clothing Store | Powered by Clothing Store
                    </p>
            </div>

        </>
    );
}