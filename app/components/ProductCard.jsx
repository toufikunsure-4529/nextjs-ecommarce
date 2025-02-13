'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [cart, setCart] = useState([]);

    const addToCart = () => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-300">
            <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
                onClick={addToCart}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;
