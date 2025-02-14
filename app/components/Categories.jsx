"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const categoriesSlides = [
    { id: 1, imageURL: "/laptop.webp", name: "Mouse", subTitle: "Precision at your fingertips." },
    { id: 2, imageURL: "/laptop.webp", name: "Headphone", subTitle: "Crystal-clear sound experience." },
    { id: 3, imageURL: "/laptop.webp", name: "Mobiles", subTitle: "Stay connected, anytime, anywhere." },
    { id: 4, imageURL: "/laptop.webp", name: "Laptop", subTitle: "Performance meets portability." },
    { id: 5, imageURL: "/laptop.webp", name: "Keyboard", subTitle: "Type with precision and speed." },
    { id: 6, imageURL: "/laptop.webp", name: "Apple Products", subTitle: "Premium quality and innovation." },
    { id: 7, imageURL: "/laptop.webp", name: "Gaming Gear", subTitle: "Elevate your gaming experience." },
];

export default function Categories({ categories }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 4 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            {
                breakpoint: 768, settings: {
                    slidesToShow: 2, arrows: false,
                }
            },

        ],
    };

    return (
        <div className="flex flex-col gap-8 justify-center px-4 md:px-8 lg:px-16 py-10">
            <div className="text-center flex flex-col items-center gap-3">
                <h2 className="text-xl font-bold text-gray-900 uppercase">Shop By Category</h2>
                <div className="w-20 md:w-24 h-1 bg-green-500 rounded-full"></div>
            </div>
            <Slider {...settings}>
                {categoriesSlides.map((category) => (
                    <Link href={`/categories/${category?.id}`} key={category.id}>
                        <div className="p-2 md:p-4 transition transform hover:scale-105">
                            <div className="h-auto md:h-[250px] flex flex-col items-center gap-2 md:gap-3 bg-white shadow-lg p-4 md:p-6 rounded-xl border border-gray-200 hover:shadow-xl">
                                <div className="h-24 w-24 md:h-32 md:w-32 rounded-full p-2  border-4 border-gray-100 transition-all">
                                    <img src={category.imageURL} alt={category.name} className="rounded-full w-full h-full object-cover" />
                                </div>
                                <h2 className="font-semibold text-sm md:text-lg text-gray-800 text-center">{category.name}</h2>
                                <p className="text-xs md:text-sm text-gray-500 text-center">{category.subTitle}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
}