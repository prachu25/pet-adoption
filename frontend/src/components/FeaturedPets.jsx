import React from "react";
import dogs from "../assets/dogs.png";


const FeaturedPets = () => {
    return (
        <div className=" py-24">

            {/* HEADING */}
            <div className="text-center">

                <h1 className="text-5xl font-bold text-[#3E2F1C]">
                    Waiting Adoption
                </h1>

                <p className="mt-4 text-gray-600">
                    Meet adorable pets looking for a loving forever home.
                </p>

            </div>

            {/* CATEGORY BUTTONS */}
            <div className="flex justify-center gap-12 mt-10 flex-wrap">

                <button className="px-10 py-2 rounded-full bg-[#D8B892] text-[#3E2F1C] tracking-widest  hover:bg-[#695439] hover:text-amber-50">
                    Dogs
                </button>

                <button className="px-10 py-2 rounded-full bg-[#D8B892] text-[#3E2F1C] tracking-widest  hover:bg-[#695439] hover:text-amber-50">
                    Cats
                </button>

                <button className="px-10 py-2 rounded-full bg-[#D8B892] text-[#3E2F1C] tracking-widest  hover:bg-[#695439] hover:text-amber-50">
                    Birds
                </button>

                <button className="px-10 py-2 rounded-full bg-[#D8B892] text-[#3E2F1C] tracking-widest  hover:bg-[#695439] hover:text-amber-50">
                    Rabbits
                </button>

            </div>

            {/* PET SHOWCASE */}
            <div className="relative max-w-5xl mx-auto mt-8">



                {/* IMAGE */}

                <img
                    src={dogs}
                    alt="dogs"
                    className="w-[700px] mx-auto"
                />

            </div>

        </div>
    );
};

export default FeaturedPets;