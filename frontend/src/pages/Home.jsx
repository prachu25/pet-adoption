import React from "react";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import WhyAdopt from "../components/WhyAdopt";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="relative min-h-screen">

            {/* HERO IMAGE */}
            <div
                className="h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4')",
                }}
            >

                {/* DARK OVERLAY */}
                <div className="bg-black/30 h-full">

                    <Navbar />

                    {/* HERO CONTENT */}
                    <div className="flex items-center h-full px-10 md:px-20">

                        <div className="max-w-xl text-white">

                            <h1 className="text-5xl font-bold leading-tight">
                                Find Your Perfect Companion
                            </h1>

                            <h3 className="text-3xl font-bold leading-tight">
                                Adopt Love. Save Lives.
                            </h3>


                            <p className="mt-6 text-lg text-gray-200">
                                Thousands of loving pets are waiting for someone to care for them.
                                Explore pets available for adoption, send requests easily, and become a part of their journey toward a happier and safer forever home.
                            </p>

                            <button className="mt-8 bg-[#D8B892] hover:bg-[#c7a27b] text-black px-8 py-3 rounded-full text-lg font-bold transition duration-300">
                                Adopt A Pet
                            </button>

                        </div>

                    </div>

                    <HowItWorks />

                    <WhyAdopt />

                    <Footer />

                </div>

            </div>

        </div>
    );
};

export default Home;