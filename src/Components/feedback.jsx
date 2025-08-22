import React from "react";



export default function feedback() {
    return (
        <>
            <div className=" w-full h-[600px] md:h-[550px] lg:h-[600px] sticky top-0 z-0">

                <img
                    src={`${process.env.PUBLIC_URL}/images/bg-5.jpeg`}
                    alt="Hero"
                    className="absolute w-full h-full object-cover"
                />


                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                    <div className=" w-[90%] md:w-[70%] flex flex-col items-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Screenshot_2025-08-20_000023-removebg-preview.png`}
                            alt="rates"
                            className="w-32 md:w-42 object-contain mb-4"
                        />

                        <h1 className="text-1xl md:text-3xl mt-2 font-serif italic">
                            ”FemmeWardrobe is my fashion sanctuary! The curated collection effortlessly
                            blends chic trends with timeless elegance, making every purchase a delightful
                            discovery. The quality of their pieces is unmatched, and I appreciate the brand's commitment
                            to sustainable fashion. What truly sets FemmeWardrobe apart is their customer-centric approach.”
                        </h1>

                        <p className="text-xs md:text-base mt-5 font-semibold max-w-2xl mx-auto">
                            Sarah M., Devoted FemmeWardrobe Fan
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}