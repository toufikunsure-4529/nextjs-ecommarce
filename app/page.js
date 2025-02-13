import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import FeaturedProductSlider from "./components/Sliders";

export default function Home() {
  const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "/product.webp" },
    { id: 2, name: "Product 2", price: 29.99, image: "/product.webp" },
    { id: 3, name: "Product 3", price: 39.99, image: "/product.webp" },
    { id: 4, name: "Product 4", price: 49.99, image: "/product.webp" },
    { id: 5, name: "Product 5", price: 59.99, image: "/product.webp" },
    { id: 6, name: "Product 6", price: 69.99, image: "/product.webp" },
    { id: 7, name: "Product 7", price: 79.99, image: "/product.webp" },
    { id: 8, name: "Product 8", price: 89.99, image: "/product.webp" },
    { id: 9, name: "Product 9", price: 99.99, image: "/product.webp" },
    {
      id: 10,
      name: "Product 10",
      price: 109.99,
      image: "/product.webp",
    },
  ];
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mb-10">
          <FeaturedProductSlider />
        </div>
        {/* <HeroSection /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>{" "}
        <h1>E-commarce</h1>
      </main>
    </>
  );
}
