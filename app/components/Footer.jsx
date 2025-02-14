import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* Logo & About */}
                <div>
                    {/* Logo */}
                    <Link href="/" className="flex items-center text-2xl font-bold text-gray-900">
                        <Image src="/logo.webp" alt="Logo" width={120} height={50} unoptimized />
                    </Link>
                    <p className="mt-2">
                        Your trusted mobile store, providing the best deals on smartphones and accessories.
                    </p>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-white font-semibold">Contact Us</h3>
                    <ul className="mt-2 space-y-2">
                        <li className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" /> +91 1234 567890
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" /> support@info.in
                        </li>
                        <li className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" /> Kolkata, India
                        </li>
                    </ul>
                </div>

                {/* Menu Links */}
                <div>
                    <h3 className="text-white font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><Link href="#" className="hover:text-white">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white">Help & Support</Link></li>
                        <li><Link href="#" className="hover:text-white">Return Policy</Link></li>
                        <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-white font-semibold">Follow Us</h3>
                    <div className="mt-2 flex space-x-4">
                        <Link href="https://www.facebook.com" target="_blank" className="hover:text-white">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.instagram.com" target="_blank" className="hover:text-white">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com" target="_blank" className="hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="hover:text-white">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="https://wa.me/911234567890" target="_blank" className="hover:text-white">
                            <MessageCircle className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-gray-800 text-center py-3 text-xs">
                © {new Date().getFullYear()} Designed & Developed by IntelliJ Technologies.
            </div>
        </footer>
    );
};

export default Footer;
