
import { Rating } from "@mui/material";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import FavoriteButton from "./FavoriteButton";
import { AuthContextProvider } from "@/context/AuthContext";
import AddToCartButton from "./AddToCartButton";
import { getProductReviewCounts } from "@/lib/firestore/products/count/read";

function ProductsGridView({ products }) {
    const mockProducts = [
        {
            id: 1,
            title: "Samsung Galaxy S23 Ultra",
            price: 1199,
            salePrice: 1099, // Discounted price
            brand: "Samsung",
            featuredImageURL: "/laptop.webp",
            shortDescription: "6.8-inch AMOLED display, 200MP camera, 5000mAh battery.",
        },
        {
            id: 2,
            title: "iPhone 15 Pro Max",
            price: 1299,
            salePrice: 1249, // Discounted price
            brand: "Apple",
            featuredImageURL: "/laptop.webp",
            shortDescription: "6.7-inch Super Retina XDR, A17 Pro chip, Titanium body.",
        },
        {
            id: 3,
            title: "Google Pixel 8 Pro",
            price: 999,
            salePrice: 949, // Discounted price
            brand: "Google",
            featuredImageURL: "/laptop.webp",
            shortDescription: "6.7-inch LTPO OLED, Tensor G3 chip, 50MP triple camera.",
        },
        {
            id: 4,
            title: "OnePlus 11 5G",
            price: 799,
            salePrice: 749, // Discounted price
            brand: "OnePlus",
            featuredImageURL: "/laptop.webp",
            shortDescription: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 5000mAh battery.",
        },
        {
            id: 5,
            title: "Xiaomi 13 Pro",
            price: 899,
            salePrice: 849, // Discounted price
            brand: "Xiaomi",
            featuredImageURL: "/laptop.webp",
            shortDescription: "6.73-inch AMOLED, Snapdragon 8 Gen 2, Leica cameras.",
        },
    ];


    return (
        <section className="w-full flex flex-col gap-8 justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-12">
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900 uppercase">Our Products</h2>
                <div className="w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="max-w-6xl w-full">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {mockProducts?.map((item) => (
                        <ProductCard product={item} key={item.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsGridView;

export function ProductCard({ product }) {
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden min-h-[360px] flex flex-col transition hover:shadow-lg">
            <div className="relative w-full">
                <img
                    src={product.featuredImageURL}
                    alt={product.title}
                    className="w-full h-48 object-cover object-center"
                />
                <div className="absolute top-1 right-1">
                    <AuthContextProvider>

                        <FavoriteButton productId={product?.id} />
                    </AuthContextProvider>
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow gap-2">
                <Link href={`/products/${product?.id}`}><h3 className="text-base font-semibold text-gray-900 line-clamp-2 hover:text-blue-500 transition-colors delay-100">{product.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{product.shortDescription}</p>
                    <div className="flex gap-2 items-center">
                        <h2 className="text-lg font-bold text-green-500">₹{product.salePrice}</h2>
                        <span className="text-sm font-semibold text-gray-600 line-through">₹{product.price}</span>
                    </div>

                    <Suspense>
                        <RatingReview product={product} />
                    </Suspense>
                </Link>

                <div className="flex justify-between gap-3 mt-auto">
                    <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
                        <button className="bg-blue-500 text-white flex-1 py-2 px-4 text-sm font-medium rounded-lg transition hover:bg-blue-600 shadow-md">
                            Buy Now
                        </button>
                    </Link>
                    {/* <button className="bg-gray-100 text-gray-700 p-2 rounded-lg transition hover:bg-gray-200 shadow-md">
                        <ShoppingCart className="w-5 h-5" />
                    </button> */}
                    <AuthContextProvider>
                        <AddToCartButton productId={product?.id} />

                    </AuthContextProvider>
                </div>
            </div>
        </div>
    );
}


async function RatingReview({ product }) {
    const counts = await getProductReviewCounts({ productId: product?.id })
    return (
        <div className=" flex gap-3 items-center">
            <Rating name="product-rating" defaultValue={counts?.averageRating ?? 0} precision={0.5} size="small" readOnly />
            <h2 className=" text-xs text-gray-400"> <span>{counts?.averageRating?.toFixed(2)}</span> ({counts?.totalReviews}) Reviews</h2>
        </div>
    )
}