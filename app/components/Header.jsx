"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, Heart, ShoppingCart, User, LogOut } from "lucide-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isLoggedIn = true;

    const menuList = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-[999] border-b border-gray-200">
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
                    <Search className="w-5 h-5 cursor-pointer text-gray-700 hover:text-blue-600 transition" />
                    <Heart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-red-500 transition" />
                    <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-green-500 transition" />
                    {isLoggedIn ? (
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly variant="light" className="text-gray-700 hover:text-gray-900">
                                    <User className="w-5 h-5" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" className="bg-white mr-10">
                                <DropdownItem key="profile">
                                    <Link href="/profile" className="block text-gray-700 hover:text-blue-600">Profile</Link>
                                </DropdownItem>
                                <DropdownItem key="logout" className="text-red-600 hover:text-red-800">
                                    <LogOut className="w-4 h-4 inline-block mr-2" /> Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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
                    <Menu />
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
                            <LogOut className="w-4 h-4" /> Logout
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
