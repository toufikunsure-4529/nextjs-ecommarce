"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Heart } from "lucide-react";

const heroSlides = [
    {
        id: 1,
        image: "/product.webp",
        title: "Discover the Future of Tech",
        shortDescription: "Explore innovative solutions for your business."
    },
    {
        id: 2,
        image: "/product.webp",
        title: "Empowering Your Digital Presence",
        shortDescription: "Transform your ideas into reality."
    },
    {
        id: 3,
        image: "/product.webp",
        title: "Seamless Integration for Your Needs",
        shortDescription: "Effortless performance and scalability."
    }
];

export default function HeroSectionSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                {heroSlides.map((product) => (
                    <div key={product.id}>
                        <div className="flex flex-col-reverse md:flex-row gap-6 bg-[#f8f8f8] p-6 md:px-20 py-20 w-full items-center">
                            <div className="flex-1 flex flex-col gap-5 md:gap-8 text-center md:text-left ">
                                <h2 className="text-green-500 font-thin text-sm md:text-base uppercase tracking-wide">
                                    New Arrival
                                </h2>
                                <Link href={`/products/${product.id}`}>
                                    <h1 className="md:text-4xl text-2xl font-bold cursor-pointer">
                                        {product.title}
                                    </h1>
                                </Link>
                                <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
                                    {product.shortDescription}
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm md:text-base transition">
                                        Buy Now
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm md:text-base transition">
                                        Add to Cart
                                    </button>
                                    <button className="border border-pink-400 text-pink-500 hover:bg-pink-50 px-4 py-2 rounded-md flex items-center gap-1 transition">
                                        <Heart size={18} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Link href={`/products/${product.id}`}>
                                    <img className="h-[14rem] md:h-[23rem] object-cover rounded-lg shadow-md cursor-pointer" src={product.image} alt="Product" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx global>{`
                .slick-dots {
                    bottom: 10px !important;
                }
                .slick-dots li button:before {
                    color: #000 !important;
                    font-size: 12px !important;
                }
                .slick-dots li.slick-active button:before {
                    color: #ECD645 !important;
                }
            `}</style>
        </div>
    );
}