import { getBrand } from "@/lib/firestore/brands/read_server";
import { getCategory } from "@/lib/firestore/categories/read_server";
import { Heart } from "lucide-react";
import Link from "next/link";

function Details({ product }) {
    // Calculate discount percentage
    const discount = product?.price && product?.salePrice
        ? Math.round(((product.price - product.salePrice) / product.price) * 100)
        : 0;

    return (
        <div className="w-full max-w-lg p-5 bg-white shadow-md rounded-lg">
            <div className="flex gap-3">
                <Category categoryId={product?.categoryId} />
                <Brand brandId={product?.brandId} />
            </div>
            {/* Product Title & Subtitle */}
            <h1 className="text-2xl font-semibold text-gray-800">{product?.title}</h1>
            <p className="text-gray-600 text-lg">{product?.shortDescription}</p>

            {/* Price Section */}
            <div className="flex items-center gap-2 mt-2">
                <h2 className="text-3xl font-bold text-red-500">₹{product?.salePrice}</h2>
                <span className="text-gray-500 line-through text-lg">₹{product?.price}</span>
                {discount > 0 && (
                    <span className="bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-md">
                        {discount}% off
                    </span>
                )}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex gap-4 mt-5">
                <button className="w-full py-3 text-white font-medium bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">
                    Add to Cart
                </button>
                <button className="w-full py-3 text-white font-medium bg-orange-500 rounded-lg hover:bg-orange-600 transition">
                    Buy Now
                </button>
                {/* <button className="w-full py-3 text-white font-medium bg-orange-500 rounded-lg hover:bg-orange-600 transition">
                    <Heart />
                </button> */}
            </div>

        </div>
    );
}

export default Details;



async function Category({ categoryId }) {
    const category = await getCategory({ id: categoryId })
    return <>
        <Link href={`/categories/${categoryId}`}>

            <div className="flex items-center gap-1 bg-green-50 border px-3 py-1 rounded-full">
                <img className="h-4" src={category?.imageURL} alt="Category Image" />
                <h4 className="text-sm font-semibold">{category?.name}
                </h4>
            </div></Link>
    </>
}


async function Brand({ brandId }) {
    const brand = await getBrand({ id: brandId })
    return <div className="flex items-center gap-1 bg-green-50 border px-3 py-1 rounded-full">
        <img className="h-4" src={brand?.imageURL} alt="Category Image" />
        <h4 className="text-sm font-semibold">{brand?.name}
        </h4>
    </div>
}
