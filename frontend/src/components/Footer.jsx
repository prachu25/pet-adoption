import React from "react";

import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#8B6F47] text-white rounded-t-[60px] ">

            <div className="max-w-6xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-4 gap-12">

                    {/* LOGO + DESC */}
                    <div>

                        <h1 className="text-4xl font-bold tracking-widest">
                            WePet
                        </h1>

                        <p className="mt-6 text-[#F5EBDD] leading-8">
                            Helping loving pets find caring families and forever homes.
                        </p>

                    </div>

                    {/* QUICK LINKS */}
                    <div>

                        <h2 className="text-2xl font-semibold">
                            Quick Links
                        </h2>

                        <ul className="mt-6 space-y-4 text-[#F5EBDD]">

                            <li className="hover:text-white cursor-pointer transition">
                                Home
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Pets
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                About
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Contact
                            </li>

                        </ul>

                    </div>

                    {/* CONTACT */}
                    <div>

                        <h2 className="text-2xl font-semibold">
                            Contact
                        </h2>

                        <div className="mt-6 space-y-4 text-[#F5EBDD]">

                            <p>
                                Nagpur, India
                            </p>

                            <p>
                                support@wepet.com
                            </p>

                            <p>
                                +91 1234567890
                            </p>

                        </div>

                    </div>

                    {/* SOCIAL */}
                    <div>

                        <h2 className="text-2xl font-semibold">
                            Follow Us
                        </h2>

                        <div className="flex gap-5 mt-6 text-3xl">

                            <FaInstagram className="hover:text-[#F5EBDD] cursor-pointer transition" />

                            <FaFacebook className="hover:text-[#F5EBDD] cursor-pointer transition" />

                            <FaTwitter className="hover:text-[#F5EBDD] cursor-pointer transition" />

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-[#b89c78] mt-16 pt-8 text-center text-[#F5EBDD]">

                    © 2026 WePet. All rights reserved.

                </div>

            </div>

        </div>
    );
};

export default Footer;