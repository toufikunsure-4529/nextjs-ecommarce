"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const collectionsSlides = [
    {
        id: 1,
        imageURL: "/product.webp",
        title: "Apple Products",
        subTitle: "Explore innovative solutions for your business."
    },
    {
        id: 2,
        imageURL: "/product.webp",
        title: "Apple Products",
        subTitle: "Transform your ideas into reality."
    },
    {
        id: 3,
        imageURL: "/product.webp",
        title: "Apple Products",
        subTitle: "Effortless performance and scalability."
    }
];

export default function Collections({ collections }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
    };

    return (
        <div className="overflow-hidden px-4 md:px-10 lg:px-16 pt-10">
            <Slider {...settings}>
                {collectionsSlides.map((collection) => (
                    <div key={collection.id} className="p-4">
                        <div className="flex flex-col md:flex-row gap-6 bg-gradient-to-tr to-[#d9e2f1] from-[#cce7f5] p-6 md:px-10 md:py-14 rounded-lg shadow-lg w-full items-center h-auto md:h-[250px]">
                            <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
                                <div >
                                    <img src="/new-collections.png" alt="New" className="h-[50px] w-auto" />
                                </div>
                                <Link href={`/collections/${collection.id}`}>
                                    <h1 className="md:text-xl text-md font-semibold hover:text-blue-600 transition">
                                        {collection.title}
                                    </h1>
                                </Link>
                                <p className="text-gray-600 text-xs max-w-md mx-auto md:mx-0">
                                    {collection.subTitle}
                                </p>
                                <div className="flex justify-center md:justify-start gap-3">
                                    <Link href={`/collections/${collection?.id}`}>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-xs text-white px-6 py-2.5 rounded-lg transition font-medium shadow-md">
                                            Shop Now
                                        </button></Link>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Link href={`/collections/${collection.id}`}>
                                    <img className="h-[8rem] md:h-[10rem] w-[8rem] md:w-[10rem] object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105" src={collection.imageURL} alt={collection.title} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx global>{`
                .slick-prev, .slick-next {
                    z-index: 100;
                    display: block !important;
                    opacity: 1 !important;
                    width: 40px;
                    height: 40px;
                }

                .slick-prev:before, .slick-next:before {
                    color: black !important;
                    font-size: 24px !important;
                }

                .slick-prev {
                    left: -10px !important;
                }

                .slick-next {
                    right: -10px !important;
                }

                @media (max-width: 768px) {
                    .slick-prev {
                        left: 0px !important;
                    }

                    .slick-next {
                        right: 0px !important;
                    }
                }
            `}</style>
        </div>
    );
}
