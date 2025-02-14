import React from 'react'

function Description({ product }) {
  return (
    <>
      <section className="mt-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-700">{product?.description || "No description available."}</p>
      </section>
    </>
  )
}

export default Description