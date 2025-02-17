"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingCart, User, LogOut } from "lucide-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const MobileHeader = ({ isLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false);

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
        <>
            {/* Desktop Icons */}
            <div className="flex items-center md:gap-6 gap-2">
                <Link href={"/search"}>
                    <button title="Search Product">
                        <Search className="w-5 md:h-5 h-4 cursor-pointer text-gray-700 hover:text-blue-600 transition" />
                    </button>
                </Link>
                <Link href={"/favorites"}>
                    <button title="My favorites">
                        <Heart className="w-5 md:h-5 h-4 cursor-pointer text-gray-700 hover:text-red-500 transition" />
                    </button>
                </Link>
                <Link href={"/cart"}>
                    <button className="My Cart">
                        <ShoppingCart className="w-5 md:h-5 h-4 cursor-pointer text-gray-700 hover:text-green-500 transition" />
                    </button>
                </Link>
                {isLoggedIn ? (
                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly variant="light" className="text-gray-700 hover:text-gray-900">
                                <User className="w-5 md:h-5 h-4" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" className="bg-white shadow-md border rounded-md">
                            <DropdownItem key="profile">
                                <Link href="/profile" className="block text-gray-700 hover:text-blue-600">Profile</Link>
                            </DropdownItem>
                            <DropdownItem key="logout" className="text-red-600 hover:text-red-800" onClick={handleLogout}>
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
                className="md:hidden text-md text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: menuOpen ? "100vh" : 0, opacity: menuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden bg-white shadow-md absolute w-full left-0 top-full flex flex-col items-center justify-center gap-5 p-8 border-t border-gray-200 overflow-hidden`}
            >
                {[
                    { name: "Home", link: "/" },
                    { name: "About", link: "/about" },
                    { name: "Contact", link: "/contact" },
                ].map((menu) => (
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
                    <button className="text-red-600 hover:text-red-800 font-medium transition mt-2 flex items-center gap-2" onClick={handleLogout}>
                        <LogOut className="w-5 h-5" /> Logout
                    </button>
                ) : (
                    <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition mt-2 text-lg">
                        Login
                    </Link>
                )}
            </motion.div>
        </>
    );
};

export default MobileHeader;
