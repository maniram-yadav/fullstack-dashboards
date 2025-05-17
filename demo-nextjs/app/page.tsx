import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeatureProducts } from "@/lib/api";

export default async function  Home() {

    const products = await getFeatureProducts();
    return (
      <div>
        <section className="bg-gradient-to-r from-primary-light to-secondary-light
        text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Next js Demo</h1>
            <p className="text-xl mb-8">Next JS Demo</p>
            <Link href="/blog"
            className="bg-white text-primary-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Explore blog
            </Link>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p)=>(
                <ProductCard key={p.id} product={p}/>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
}