import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeatureProducts } from "@/lib/api";

export default async function  Home() {
  
    const products = await getFeatureProducts();
    return (
      <div>
        <section className="">
          <div className="">
            <h1 className="">Next js Demo</h1>
            <p className="">Next JS Demo</p>
            <Link href="/blog"
            className="">
              Explore blog
            </Link>
          </div>
        </section>
        <section className="">
          <div className="">
            <h2 className="">Featured Products</h2>
            <div className="">
              {products.map((product)=>(
                <ProductCard key={product.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
}