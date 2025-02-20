import AddToCartButton from "@/app/components/AddToCartButton";
import FavoriteButton from "@/app/components/FavoriteButton";
import { AuthContextProvider } from "@/context/AuthContext";
import { getBrand } from "@/lib/firestore/brands/read_server";
import { getCategory } from "@/lib/firestore/categories/read_server";
import { Heart } from "lucide-react";
import Link from "next/link";

function Details({ product }) {
    const discount = product?.price && product?.salePrice
        ? Math.round(((product.price - product.salePrice) / product.price) * 100)
        : 0;

    return (
        <div className="w-full max-w-2xl p-6 bg-gray-50 rounded-xl  ">
            {/* Category & Brand */}
            <div className="flex gap-3 items-center mb-3">
                <Category categoryId={product?.categoryId} />
                <Brand brandId={product?.brandId} />
            </div>

            {/* Product Title & Description */}
            <h1 className="text-xl font-bold text-gray-900">{product?.title || 'Apple MacBook Air M1 (2020) - 16GB RAM, 256GB SSD, 8-Core GPU'}</h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{product?.shortDescription || 'Experience unparalleled performance and efficiency with the Apple MacBook Air M1 (2020), featuring 16GB RAM, 256GB SSD storage, and an advanced 8-core GPU for seamless multitasking and stunning visuals.'}</p>

            {/* Price Section */}
            <div className="flex items-center gap-3 mt-4">
                <h2 className="text-2xl font-bold text-gray-900">₹{product?.salePrice || "50000"}</h2>
                <span className="text-gray-500 line-through text-md">₹{product?.price || "60000"}</span>
                {discount > 0 && (
                    <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                        {discount}% OFF
                    </span>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">

                <Link href={`/checkout?type=buynow&productId=${product?.id}`} className="flex-1">
                    <button className="w-full py-3 text-white font-semibold bg-black rounded-lg shadow-md hover:bg-gray-100 hover:border-black transition-all duration-300">
                        Buy Now
                    </button>
                </Link>
                <AuthContextProvider>
                    <AddToCartButton productId={product?.id} />
                </AuthContextProvider>
                <AuthContextProvider>
                    <FavoriteButton productId={product?.id} />
                </AuthContextProvider>
            </div>

        </div>
    );
}

export default Details;

async function Category({ categoryId }) {
    const category = await getCategory({ id: categoryId });
    return (
        <Link href={`/categories/${categoryId}`} className="flex items-center gap-2 bg-green-100 border px-3 py-1 rounded-full">
            <img className="h-5 w-5 object-cover rounded-full" src={category?.imageURL || "/logo.webp"} alt="Category" />
            <h4 className="text-sm font-semibold text-gray-800">{category?.name || 'Unknown'}</h4>
        </Link>
    );
}

async function Brand({ brandId }) {
    const brand = await getBrand({ id: brandId });
    return (
        <div className="flex items-center gap-2 bg-blue-100 border px-3 py-1 rounded-full">
            <img className="h-5 w-5 object-cover rounded-full" src={brand?.imageURL || "/logo.webp"} alt="Brand" />
            <h4 className="text-sm font-semibold text-gray-800">{brand?.name || 'Unknown'}</h4>
        </div>
    );
}
