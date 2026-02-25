import Link from "next/link";
import products, { Product } from "../data/products";
import Image from "next/image";

export default function ProductPreview() {
  const previewProducts = products.slice(0, 3); // always show only 3

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/40">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Aarya Foundation Products
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Pure, natural and cow-based products prepared with care.
            Every purchase supports cow welfare and gaushala maintenance.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {previewProducts.map((p: Product) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* IMAGE — FIXED PROFESSIONAL */}
              <div className="relative w-full aspect-square bg-gray-50 flex items-center justify-center p-6">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {p.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Available at Aarya Foundation
                </p>

                <Link
                  href="/products"
                  className="inline-block mt-4 text-green-900 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/products"
            className="inline-block bg-green-900 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition font-semibold shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}