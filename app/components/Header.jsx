"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Heart, ShoppingCart, User, LogOut } from "lucide-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Badge } from "@nextui-org/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import LogoutButton from "./LogoutButton";
import { AuthContextProvider } from "@/context/AuthContext";
import HeaderClientButton from "./HeaderClientButton";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isLoggedIn = true;

    const menuList = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ]; 3

    const handleLogout = async () => {
        try {
            await toast.promise(signOut(auth), {
                error: (e) => e?.message,
                loading: "Processing...",
                success: "Logout Successfully"
            });
        } catch (error) {
            toast.error(error?.message);
        }
    };

    return (
        <header className="bg-white bg-opacity-65 backdrop-blur-2xl shadow-md fixed w-full top-0 z-[999] border-b border-gray-200">
            <div className="container mx-auto md:px-6 px-3 py-3 flex items-center justify-between">
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
                <div className="flex items-center md:gap-5 gap-3">
                    <Link href={"/search"}>
                        <button title="Search Product">
                            <Search className="w-5 md:h-5 h-4 cursor-pointer text-gray-700 hover:text-blue-600 transition" />
                        </button>
                    </Link>

                    <AuthContextProvider>
                        <HeaderClientButton />

                    </AuthContextProvider>

                    {isLoggedIn ? (
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly variant="light" className="text-gray-700 hover:text-gray-900">
                                    <User className="w-5 md:h-5 h-4" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" className="bg-white shadow-md border rounded-md">
                                <DropdownItem key="profile">
                                    <Link href="/account" className="block text-gray-700 hover:text-blue-600">Profile</Link>
                                </DropdownItem>
                                <DropdownItem key="logout" className="text-red-600 hover:text-red-800">
                                    <AuthContextProvider>
                                        <LogoutButton />
                                    </AuthContextProvider>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition">Login</Link>
                    )}
                    <AuthContextProvider>

                        <LogoutButton />
                    </AuthContextProvider>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-md text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: menuOpen ? "100vh" : 0, opacity: menuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden bg-white shadow-md absolute w-full left-0 top-full flex flex-col items-center justify-center gap-5 p-8 border-t border-gray-200 overflow-hidden`}
            >
                {menuList.map((menu) => (
                    <Link
                        key={menu.name}
                        href={menu.link}
                        className="text-gray-700 hover:text-blue-600 font-medium transition text-lg"
                        onClick={() => setMenuOpen(false)}
                    >
                        {menu.name}
                    </Link>
                ))}
                {isLoggedIn ? (
                    <AuthContextProvider>

                        <LogoutButton />
                    </AuthContextProvider>
                ) : (
                    <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition mt-2 text-lg">
                        Login
                    </Link>
                )}
            </motion.div>
        </header>
    );
};

export default Header;