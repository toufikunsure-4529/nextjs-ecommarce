"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch, FiHeart, FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const isLoggedIn = false; // Update with actual authentication logic

    const menuList = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center text-2xl font-bold text-gray-900">
                    <Image src="/logo.webp" alt="Logo" width={120} height={50} unoptimized />
                </Link>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex gap-8">
                    {menuList.map((menu) => (
                        <Link
                            key={menu.name}
                            href={menu.link}
                            className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
                        >
                            {menu.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Section (Icons) */}
                <div className="flex items-center gap-6">
                    <FiSearch className="text-xl cursor-pointer text-gray-700 hover:text-blue-600 transition" />
                    <FiHeart className="text-xl cursor-pointer text-gray-700 hover:text-red-500 transition" />
                    <FiShoppingCart className="text-xl cursor-pointer text-gray-700 hover:text-green-500 transition" />
                    {isLoggedIn ? (
                        <div className="relative">
                            <FiUser
                                className="text-xl cursor-pointer text-gray-700 hover:text-gray-900 transition"
                                onClick={() => setProfileOpen(!profileOpen)}
                            />
                            {profileOpen && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-40 border border-gray-100">
                                    <Link href="/profile" className="block text-gray-700 hover:text-blue-600 py-2">Profile</Link>
                                    <button className="block text-red-600 hover:text-red-800 py-2 w-full text-left">
                                        <FiLogOut className="inline-block mr-2" /> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition">Login</Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-full flex flex-col gap-3 p-5 border-t border-gray-200">
                    {menuList.map((menu) => (
                        <Link
                            key={menu.name}
                            href={menu.link}
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            {menu.name}
                        </Link>
                    ))}
                    {isLoggedIn ? (
                        <button className="text-red-600 hover:text-red-800 font-medium transition mt-2 flex items-center gap-2">
                            <FiLogOut /> Logout
                        </button>
                    ) : (
                        <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition mt-2">
                            Login
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;