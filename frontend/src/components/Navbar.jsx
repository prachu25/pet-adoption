import React from "react";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-50">

            {/* LOGO */}
            <h1 className="text-2xl font-bold text-shadow-blacke tracking-widest">
                🐾 WePet
            </h1>

            {/* MENU */}
            <ul className="flex gap-8 text-white font-medium">
                <li className="hover:text-[#E7C9A9] cursor-pointer">Home</li>
                <li className="hover:text-[#E7C9A9] cursor-pointer">Pets</li>
                <li className="hover:text-[#E7C9A9] cursor-pointer">Help</li>
                <li className="hover:text-[#E7C9A9] cursor-pointer">About</li>
                <li className="hover:text-[#E7C9A9] cursor-pointer">Contact</li>
            </ul>

        </nav>
    );
};

export default Navbar;