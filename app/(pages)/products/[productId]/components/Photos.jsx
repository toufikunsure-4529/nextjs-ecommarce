"use client"
import React, { useState } from 'react';

function Photos({ imageList }) {
    const defaultImage = "/laptop.webp";
    const [selectedImage, setSelectedImage] = useState(imageList[0] || defaultImage);

    if (!imageList?.length) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-3xl font-bold text-red-500">Something Went Wrong</div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md p-4">
            {/* Main Image */}
            <div className="border rounded-lg overflow-hidden">
                <img src={selectedImage} alt="Product Image" className="w-full h-80 object-contain" />
            </div>

            {/* Thumbnail Slider */}
            <div className="flex gap-2 mt-3 overflow-x-auto">
                {imageList?.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        className={`w-16 h-16 object-cover cursor-pointer border-2 rounded-md ${selectedImage === img ? "border-blue-500" : "border-gray-300"
                            }`}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Photos;
