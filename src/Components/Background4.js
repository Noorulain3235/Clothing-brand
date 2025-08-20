import { Link } from "react-router-dom";
import React from "react";


export default function Background4() {
    return (

        <div className=" w-full h-[450px] md:h-[550px] lg:h-[600px] sticky top-0 z-0">

            <img
                src={`${process.env.PUBLIC_URL}/images/woman-road-17986969.webp`}
                alt="Hero"
                className="absolute w-full h-full object-cover"
            />


            <div className="absolute inset-0 flex items-center justify-end text-start text-white px-4">
                <div className="w-[50%] flex flex-col ">
                    <p className="text-xs md:text-sm mt-2">Explore</p>

                    <h1 className="text-2xl md:text-5xl mt-2 font-serif italic">
                        Elevate your wardrobe, embrace timeless style!
                    </h1>

                    <p className="text-base mt-5 font-semibold max-w-2xl mx-auto">
                        Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!


                    </p>
                    <Link
                        to="/"
                        className="block mt-5 font-semibold md:font-medium w-[170px]
                     text-sm text-center bg-transparent border border-white
                    text-white py-3 hover:bg-white hover:text-black transition"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </div>
    );
}
