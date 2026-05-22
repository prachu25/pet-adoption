import React from "react";
import FeaturedPets from "./FeaturedPets";



const HowItWorks = () => {
    return (
        <div className="bg-[#ead6bc] py-20  relative z-20">

            {/* CONTAINER */}
            <div className="max-w-4xl mx-auto text-center">

                {/* HEADING */}
                <h1 className="text-5xl font-bold text-[#3E2F1C] mb-20">
                    How It Works
                </h1>

                {/* LINE */}
                <div className="relative flex justify-between items-center">

                    {/* MAIN LINE */}
                    <div className="absolute top-3 left-0 w-full h-[2px] bg-[#695946]"></div>

                    {/* STEP 1 */}
                    <div className="relative z-10 flex flex-col items-center w-1/3">

                        <div className="w-6 h-6 rounded-full bg-[#685b4b] border-4 border-[#F7F3EE]"></div>

                        <h2 className="mt-6 text-lg font-semibold tracking-wide text-[#3E2F1C]">
                            Browse Pets
                        </h2>

                        <p className="mt-3 text-sm text-gray-500 max-w-[180px]">
                            Explore pets available for adoption.
                        </p>

                    </div>

                    {/* STEP 2 */}
                    <div className="relative z-10 flex flex-col items-center w-1/3">

                        <div className="w-6 h-6 rounded-full bg-[#685b4b] border-4 border-[#F7F3EE]"></div>

                        <h2 className="mt-6 text-lg font-semibold tracking-wide text-[#3E2F1C]">
                            Send Request
                        </h2>

                        <p className="mt-3 text-sm text-gray-500 max-w-[180px]">
                            Send adoption requests directly.
                        </p>

                    </div>

                    {/* STEP 3 */}
                    <div className="relative z-10 flex flex-col items-center w-1/3">

                        <div className="w-6 h-6 rounded-full bg-[#685b4b] border-4 border-[#F7F3EE]"></div>

                        <h2 className="mt-6 text-lg font-semibold tracking-wide text-[#3E2F1C]">
                            Adopt Pet
                        </h2>

                        <p className="mt-3 text-sm text-gray-500 max-w-[180px]">
                            Complete adoption and give them a home.
                        </p>

                    </div>

                </div>

            </div>

            {/* FEATURED PETS */}
            <FeaturedPets />

        </div>
    );
};

export default HowItWorks;