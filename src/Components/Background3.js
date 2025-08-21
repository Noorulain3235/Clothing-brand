import React from "react";

export default function Background3() {
    return (
        <>
            <div className="relative w-full bg-white text-black py-20 px-4 text-center">
                <div className="flex flex-col md:flex-row justify-center gap-10">

                    {/* 1 */}
                    <div className="flex flex-col items-center text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="mb-4"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 
                                1 2 2.45v5a2.5 2.5 0 0 
                               1-2.5 2.5h-7A2.5 2.5 0 0 
                               1 2 13.5v-5a2.5 2.5 0 0 
                              1 2-2.45V4a4 4 0 0 
                              1 4-4m0 1a3 3 0 0 
                                0-3 3v2h6V4a3 3 0 0 0-3-3"
                            />
                        </svg>

                        <h1 className="text-2xl md:text-3xl italic font-bold font-serif mb-4">
                            Secure Payments
                        </h1>
                        <p className="max-w-xs text-gray-500">
                            Shop with confidence knowing that your
                            transactions are safeguarded.
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"   className="mb-4" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                        </svg>

                        <h1 className="text-2xl md:text-3xl italic font-bold font-serif mb-4">
                            Free Shipping
                        </h1>
                        <p className="max-w-xs text-gray-500">
                            Shopping with no extra charges – savor the liberty
                            of complimentary shipping on every order.
                        </p>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"   className="mb-4" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                        </svg>

                        <h1 className="text-2xl md:text-3xl italic font-bold font-serif mb-4">
                            Easy Returns
                        </h1>
                        <p className="max-w-xs text-gray-500">
                            With our hassle-free Easy Returns, changing your mind
                            has never been more convenient.
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="flex flex-col items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"   className="mb-4" class="bi bi-geo" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
                        </svg>

                        <h1 className="text-2xl md:text-3xl italic font-bold font-serif mb-4">
                            Order Tracking
                        </h1>
                        <p className="max-w-xs text-gray-500">
                            Stay in the loop with our Order Tracking feature – from
                            checkout to your doorstep.
                        </p>
                    </div>
                </div>
            </div>


        </>
    );
}
