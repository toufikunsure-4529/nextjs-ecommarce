import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import FeaturedProductSlider from "./components/Sliders";
import { getFeaturedProducts } from "@/lib/firestore/products/read_server";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="mb-10">
          <FeaturedProductSlider featuredProducts={featuredProducts} />
        </div>

        <h1>E-commarce</h1>
      </main>
    </>
  );
}
