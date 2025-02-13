"use client";

import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    customer: "John Doe",
    rating: 5,
    comment: "Amazing product! Highly recommend.",
    date: "2025-02-12",
  },
  {
    id: 2,
    customer: "Jane Smith",
    rating: 4,
    comment: "Good quality, but shipping was slow.",
    date: "2025-02-10",
  },
  {
    id: 3,
    customer: "Alice Johnson",
    rating: 2,
    comment: "Product is okay, expected better packaging.",
    date: "2025-02-08",
  },
  {
    id: 4,
    customer: "Jane Smith",
    rating: 4,
    comment: "Good quality, but shipping was slow.",
    date: "2025-02-10",
  },
  {
    id: 5,
    customer: "Jane Smith",
    rating: 4,
    comment: "Good quality, but shipping was slow.",
    date: "2025-02-10",
  },
];

export default function AdminReviews() {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">Customer Reviews</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border p-3">Customer</th>
                <th className="border p-3">Rating</th>
                <th className="border p-3">Comment</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id} className={`text-center hover:bg-gray-100 transition ${review.rating <= 2 ? "bg-yellow-500 text-white" : "text-black bg-white"}`}>
                  <td className="border p-3">{review.customer}</td>
                  <td className={`border p-3 text-yellow-500 `}>{"⭐".repeat(review.rating)}</td>
                  <td className="border p-3 truncate max-w-xs">{review.comment}</td>
                  <td className="border p-3 text-gray-500">{review.date}</td>
                  <td className="border p-3">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
                      onClick={() => setSelectedReview(review)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {
        selectedReview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <h3 className="text-xl font-bold mb-4">Review Details</h3>
              <p><strong>Customer:</strong> {selectedReview.customer}</p>
              <p><strong>Rating:</strong> <span className="text-yellow-500">{"⭐".repeat(selectedReview.rating)}</span></p>
              <p><strong>Comment:</strong> {selectedReview.comment}</p>
              <p><strong>Date:</strong> {selectedReview.date}</p>
              <button
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                onClick={() => setSelectedReview(null)}
              >
                Close
              </button>
            </div>
          </div>
        )
      }
    </div >
  );
}