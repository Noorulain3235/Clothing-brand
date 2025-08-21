import React from "react";
import { Link } from "react-router-dom";
import About1 from "./About1";
import Aboutus2 from "./Aboutus2"
import Background3 from "./Background3";
import Background4 from "./Background4";


export default function Home() {
    return (
        <>
            {/* Heroimage */}
            <div className="w-full h-[450px] md:h-[550px] lg:h-[600px] sticky top-0 z-0">


                <img
                    src={`${process.env.PUBLIC_URL}/images/images (1).jpeg`}
                    alt="Hero"
                    className="absolute w-full h-full object-cover"
                />


                <div className="absolute inset-0 flex flex-col items-center justify-center 
                text-center text-white px-4">
                    <p className="text-xl font-semibold">Casual & Everyday</p>
                    <h1 className="text-3xl md:text-5xl font-bold mt-2 font-serif italic">
                        Effortlessly blend comfort & style!
                    </h1>


                    <p className="text-base mt-5 font-semibold max-w-2xl">
                        Effortlessly blend comfort and style with our Casual & Everyday
                        collection, featuring cozy sweaters, versatile denim, laid-back tees,
                        and relaxed-fit joggers for your everyday adventures.
                    </p>
                    <Link
                        to="/"
                        className="block mt-5 font-semibold md:font-medium w-[170px]
                         text-sm text-center bg-transparent border border-white
                   text-white py-3 hover:bg-white hover:text-black transition"
                    >
                        VIEW COLLECTION
                    </Link>

                </div>
            </div>


            {/* about1 */}

            <div className="relative min-h-screen py-10  bg-white">
                <div className="py-24  text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold mt-2 font-serif italic">
                        Most Popular
                    </h1>
                </div>

                <About1 />

            </div>



            {/* Background2 */}
            <div className="relative w-full h-[650px] md:h-[900px] lg:h-[950px]">


                <img
                    src={`${process.env.PUBLIC_URL}/images/bg2.jpeg`}
                    alt="Hero"
                    className="sticky top-0 w-full h-full object-fill"
                />


                <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center 
                                       text-center text-white px-8 py-10">

                    <img
                        src={`${process.env.PUBLIC_URL}/images/bg-03-b.jpg`}
                        alt="Hero"
                        className="w-[95%] h-[80%] md:w-[40%] md:h-[70%] object-cover"
                    />

                    <div className="flex flex-col justify-center items-center text-center py-5 w-[95%] md:w-[40%]">
                        <h1 className="text-2xl md:text-3xl font-bold mt-2 font-serif italic">
                            Explore our exquisite Bag Collection now!
                        </h1>

                        <Link
                            to="/"
                            className="mt-6 font-semibold md:font-medium 
                                              text-sm text-center bg-transparent border border-white
                                              text-white py-4 px-6 hover:bg-white hover:text-black transition"
                        >
                            VIEW COLLECTION
                        </Link>
                    </div>
                </div>
            </div>



            {/* Next code secetion */}
            <div className="relative w-full h-[1050px] md:h-[1000px] lg:h-[1200px]">
                <img
                    src={`${process.env.PUBLIC_URL}/images/download (1).jpeg`}
                    alt="Hero"
                    className="sticky top-0 w-full h-full object-fill"
                />


                <div className=" flex flex-row  absolute
                                     w-full h-[600px] md:h-[500px] text-black
                                     lg:h-[550px] inset-0
                                      bg-gray-100 items-center 
                                      justify-between   ">

                    <div className=" w-full px-4 md:px-8 md:w-1/2 space-y-5">

                        <p className="text-xs text-gray-500  font-semibold">Work & Office Attire</p>
                        <h1 className="text-3xl md:text-5xl text-black-800  font-bold mt-2 font-serif italic">
                            Professional pinstripe blazers collection
                        </h1>


                        <p className="text-base mt-5 text-gray-500 font-semibold max-w-2xl">
                            Elevate your workwear with our Professional Pinstripe Blazers Collection,
                            where tailored sophistication meets modern
                            confidence for a powerfully polished office look.
                        </p>
                        <Link
                            to="/"
                            className="block mt-5 font-semibold md:font-medium w-[170px]
                                                             text-sm text-center bg-transparent border border-black
                                                       text-black py-3 hover:bg-black hover:text-white transition"
                        >
                            SHOP NOW
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 h-full flex justify-center mt-8 md:mt-0">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/bg-4-b.jpeg`}
                            alt="Casual & Everyday"
                            className="w-[90%] h-full  md:w-[100%] lg:w-[100%] object-cover "
                        />
                    </div>


                </div>


                <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center 
                                       text-center text-white px-8 mt-[140%] md:mt-[35%] py-10">

                    <img
                        src={`${process.env.PUBLIC_URL}/images/img-05-a-black-300x366.jpg`}
                        alt="Hero1"
                        className="w-[95%] h-[50%] md:w-[40%] md:h-[70%] mt-20 md:mt-0 object-cover"
                    />

                    <div className="flex flex-col justify-center items-center text-center py-5 w-[95%] md:w-[40%]">
                        <h1 className="text-2xl md:text-3xl font-bold mt-2 font-serif italic">
                            Explore our exquisite Bag Collection now!
                        </h1>

                        <Link
                            to="/"
                            className="mt-6 font-semibold md:font-medium 
                                              text-sm text-center bg-transparent border border-white
                                              text-white py-4 px-6 hover:bg-white hover:text-black transition"
                        >
                            SHOP NOW
                        </Link>
                    </div>
                </div>


            </div>



            {/* About2 */}

            <div className="relative min-h-screen py-10 bg-white">
                <div className="py-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold mt-2 font-serif italic">
                        Newest Products
                    </h1>
                </div>

                <Aboutus2 />
            </div>

            {/* Background3 */}


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










            <Background3 />
            <Background4 />








        </>
    );
}