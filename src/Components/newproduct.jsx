import React from "react";
import Aboutus2 from "./Aboutus2"

export default function mostpopular() {
    return (
        <>
            <div className="relative min-h-screen py-10 bg-white">
                <div className="py-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold mt-2 font-serif italic">
                        Newest Products
                    </h1>
                </div>

                <Aboutus2 />
            </div>
        </>
    );
}