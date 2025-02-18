"use client"; // Ensure it's a client component

import Link from "next/link";

const NavLinks = ({ isMobile = false }) => {
    const menuList = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <nav className={`${isMobile ? "flex flex-col gap-4" : "hidden md:flex gap-8"}`}>
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
    );
};

export default NavLinks;
