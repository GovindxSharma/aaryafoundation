import Link from "next/link";
import products, { Product } from "../data/products";
import Image from "next/image";

export default function ProductPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Aarya Foundation Products
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Pure, natural and cow-based products prepared with care.  
            Every purchase supports cow welfare and gaushala maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {products.slice(0, 3).map((p: Product) => (
            <div
              key={p.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={300}
                  className="w-full h-[220px] object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{p.name}</h3>

                <p className="text-green-900 font-bold mt-2">
                  ₹{p.price}
                </p>

                <Link
                  href="/products"
                  className="mt-4 inline-block text-sm text-green-800 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="btn-primary"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}
