import React from "react";

import {
    FaPaw,
    FaHeart,
    FaHome,
} from "react-icons/fa";

const WhyAdopt = () => {
    return (
        <div className="bg-[#ede0d2] py-20">

            {/* HEADING */}
            <div className="text-center">

                <h1 className="text-5xl font-bold text-[#3E2F1C]">
                    Why Adopt From Us
                </h1>

                <p className="mt-4 text-gray-500">
                    We connect loving pets with caring families.
                </p>

            </div>

            {/* FEATURES */}
            <div className="max-w-6xl mx-auto mt-20 px-6">

                <div className="grid md:grid-cols-3 gap-8">

                    {/* FEATURE 1 */}
                    <div className="flex items-start gap-5 border-b border-[#d8c3aa] pb-8">

                        <FaPaw className="text-4xl text-[#8B6F47]" />

                        <div>

                            <h2 className="text-2xl font-semibold text-[#3E2F1C]">
                                Verified Pets
                            </h2>

                            <p className="mt-3 text-gray-500 leading-7">
                                Every pet is properly verified and ready for adoption.
                            </p>

                        </div>

                    </div>

                    {/* FEATURE 2 */}
                    <div className="flex items-start gap-5 border-b border-[#d8c3aa] pb-8">

                        <FaHeart className="text-4xl text-[#8B6F47]" />

                        <div>

                            <h2 className="text-2xl font-semibold text-[#3E2F1C]">
                                Loving Care
                            </h2>

                            <p className="mt-3 text-gray-500 leading-7">
                                We help pets find families that truly care for them.
                            </p>

                        </div>

                    </div>

                    {/* FEATURE 3 */}
                    <div className="flex items-start gap-5 border-b border-[#d8c3aa] pb-8">

                        <FaHome className="text-4xl text-[#8B6F47]" />

                        <div>

                            <h2 className="text-2xl font-semibold text-[#3E2F1C]">
                                Easy Adoption
                            </h2>

                            <p className="mt-3 text-gray-500 leading-7">
                                Browse pets and complete adoption safely and easily.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default WhyAdopt;