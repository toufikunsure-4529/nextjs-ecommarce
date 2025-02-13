"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSearch, FiHeart, FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isLoggedIn = false; // Change based on authentication state

    const menuList = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center">
                    <Image src="/logo.webp" alt="Logo" width={100} height={40} unoptimized />
                </Link>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex gap-6">
                    {menuList.map((menu) => (
                        <Link
                            key={menu.name}
                            href={menu.link}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            {menu.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Section (Icons) */}
                <div className="flex items-center gap-4">
                    <FiSearch className="text-xl cursor-pointer hover:text-blue-600" />
                    <FiHeart className="text-xl cursor-pointer hover:text-red-500" />
                    <FiShoppingCart className="text-xl cursor-pointer hover:text-green-500" />
                    {isLoggedIn ? (
                        <>
                            <FiUser className="text-xl cursor-pointer hover:text-gray-800" />
                            <FiLogOut className="text-xl cursor-pointer hover:text-red-600" />
                        </>
                    ) : (
                        <Link href="/login" className="text-gray-700 hover:text-blue-600">
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-full flex flex-col gap-3 p-4">
                    {menuList.map((menu) => (
                        <Link
                            key={menu.name}
                            href={menu.link}
                            className="text-gray-700 hover:text-blue-600"
                            onClick={() => setMenuOpen(false)}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
