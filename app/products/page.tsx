import Image from "next/image";
import products, { Product } from "../data/products";

export default function Products() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/40">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Natural Products
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Pure, organic and cow-based products prepared with love and care.
            Every purchase directly supports cow welfare and gaushala activities.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p: Product) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* IMAGE CONTAINER — FIXED PROFESSIONAL */}
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
              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {p.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Available at Aarya Foundation
                </p>

                <button className="mt-5 bg-green-900 text-white px-6 py-2.5 rounded-xl hover:bg-green-800 transition font-medium">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}