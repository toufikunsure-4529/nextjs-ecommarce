"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroSlides = [
    {
        id: 1,
        image: "/images/hero1.jpg",
        title: "Discover the Future of Tech",
        subtitle: "Explore innovative solutions for your business."
    },
    {
        id: 2,
        image: "/images/hero2.jpg",
        title: "Empowering Your Digital Presence",
        subtitle: "Transform your ideas into reality."
    },
    {
        id: 3,
        image: "/images/hero3.jpg",
        title: "Seamless Integration for Your Needs",
        subtitle: "Effortless performance and scalability."
    }
];

export default function HeroSectionSlider({ featuredProducts }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className="relative w-full h-screen bg-gray-900">
            <Slider {...settings}>
                {featuredProducts.map((product) => (
                    <div key={product.id} className="relative w-full h-screen">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                            <h1 className="text-4xl md:text-6xl font-bold">{product.title}</h1>
                            <p className="text-lg md:text-2xl mt-4">{product.subtitle}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
