import React from "react";
import Background4 from "../Components/Background4";


export default function About() {
    return (
        <>
                   {/* front image */}
            <div className=" relative w-full h-[300px] md:h-[550px] lg:h-[580px]  top-0 z-0">

                <img
                    src={`${process.env.PUBLIC_URL}/images/about img.jpeg`}
                    alt="Hero"
                    className="absolute w-full h-full object-cover"
                />


                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                    <div className=" w-[90%] md:w-[70%] flex flex-col items-center">


                        <h1 className="text-3xl md:text-7xl mt-2 font-medium font-serif italic">
                            About Us
                        </h1>


                    </div>
                </div>
            </div>

                 {/* box1 */}


            <div className="flex flex-col md:flex-row items-center justify-center 
             text-start  px-8 md:px-0 py-12 md:py-36 ">
                <div className="max-w-4xl mx-auto md:px-8  md:w-1/2">
                    <h2 className="text-2xl md:text-5xl !leading-[1.6] font-serif italic mb-8 md:mb-4">From Vision
                        To Vogue: The Birth Of FemmeWardrobe
                    </h2>

                </div>

                <div className="max-w-4xl mx-auto px-4 md:w-1/2">
                    <p className="text-xs tracking-widest font-medium  text-gray-700 mb-6">OUR STORY</p>
                    <p className="text-sm tracking-widest font-medium text-black font-serif italic mb-4">
                        Our Journey Began With A Simple Yet Powerful Vision - To Redefine
                        The Way Women Experience Fashion.
                    </p>

                    <p className="text-sm tracking-widest font-medium   text-gray-500">
                        Fueled by a passion for style and a commitment to individuality,
                        we embarked on a mission to curate a collection that speaks to the
                        diverse tastes and personalities of our cherished customers. From
                        our humble beginnings to the vibrant online space we inhabit today,
                        each milestone represents a chapter in our story. Join us on this
                        fashion-forward adventure, where every piece tells a tale of inspiration,
                        dedication, and sartorial elegance.
                    </p>

                </div>

            </div>
            <div className="border-t border-solid border-gray-300 mx-6 my-4"></div>

                  {/* box3 */}

            <div className="flex flex-col items-center justify-center text-start py-12 md:py-36 ">

                <div className="max-w-7xl mx-auto px-8 ">
                    <p className="text-xs tracking-widest font-medium uppercase  mb-8">Quality Assurance</p>
                    <h1 className="text-2xl md:text-5xl tracking-wider font-medium text-black font-serif italic  mb-6">
                        We understand that fashion is an expression of identity, and we take pride in delivering
                        products that embody the highest standards of quality.
                    </h1>

                    <p className="text-sm tracking-wider font-medium   text-gray-500">
                        Our journey to excellence begins with meticulous sourcing, where we
                        carefully select materials that meet our stringent criteria for
                        durability, comfort, and style. Every garment is crafted with
                        precision in our state-of-the-art manufacturing facilities,
                        ensuring attention to detail at every stitch. Our commitment
                        to quality doesn't end there – rigorous quality control
                        processes guarantee that each piece meets our exacting standards
                        before it finds its way to your wardrobe. Trust in FemmeWardrobe
                        for fashion that not only captures attention but withstands the test of time.
                    </p>

                </div>
            </div>


               {/* box4 */}


            <div className=" w-full h-[600px] md:h-[550px] lg:h-[600px] sticky top-0 z-0">

                <img
                    src={`${process.env.PUBLIC_URL}/images/554817.jpg`}
                    alt="Hero"
                    className="absolute w-full h-full object-cover"
                />


                <div className="absolute inset-0 flex items-center justify-start text-start text-white px-4">
                    <div className=" w-[90%] md:w-[50%] flex flex-col">

                        <p className="text-xs md:text-sm uppercase mt-5 font-semibold mb-4">
                            Customer-Centric Approach
                        </p>
                        <h1 className="text-2xl md:text-5xl !leading-[1.4] mt-2 font-serif italic">
                            Beyond Fashion: Nurturing A Customer-Centric Experience
                        </h1>

                        <p className="text-xs md:text-base mt-5 font-semibold max-w-2xl mx-auto">
                            We believe that the essence of our success lies in the satisfaction of
                            our customers. Our commitment to providing an exceptional shopping
                            experience goes beyond trends and styles – it's about understanding
                            and meeting the unique needs of every individual who chooses FemmeWardrobe.
                            From personalized recommendations to hassle-free returns, we've crafted
                            every aspect of our service with you in mind. Our dedicated customer
                            support team is here to ensure your journey with us is seamless,
                            enjoyable, and exceeds your expectations. Join our community of
                            empowered fashion enthusiasts, where your satisfaction is not just
                            a priority; it's our passion.
                        </p>
                    </div>
                </div>
            </div>



             
             {/* box5 */}

            <div className="bg-white relative py-16 px-6 md:px-20">
               
                <p className="text-xs md:text-sm tracking-widest font-semibold uppercase text-black">
                    Sustainability Initiatives
                </p>

               
                <h1 className="text-3xl md:text-5xl font-serif italic font-medium mt-4 mb-16">
                    Conscious Fashion For A Better Tomorrow
                </h1>

               
                

                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                   
                    <p className="text-black font-serif tracking-wider italic text-sm md:text-base
                     capitalize  mr-5  leading-relaxed">
                        We recognize the responsibility we hold in shaping a more sustainable
                    future for fashion. Our commitment to eco-friendly practices and
                    sustainable fashion choices is at the core of what we do.
                    </p>

                    
                   <div className="items-center justify-center">

                        <p className="text-gray-400 leading-relaxed mb-4">

                            From the careful selection of ethically sourced materials to the
                        implementation of environmentally conscious manufacturing processes,
                        every step we take is a stride toward a greener and more sustainable
                        industry.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                        We prioritize transparency in our supply chain, partnering with
                        suppliers who share our values of fair labor practices and
                        environmental stewardship. Our sustainable fashion choices extend to
                        packaging as well – we use recyclable materials to minimize our
                        environmental footprint. Join us on this journey towards conscious
                        fashion, where style meets responsibility, and every purchase
                        contributes to a brighter, eco-friendly tomorrow.
                    </p>
                   </div>
                </div>
            </div>

              <Background4/>

        </>
    );
}