import Image from "next/image";
import products, { Product } from "../data/products";

export default function Products() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <div className="text-center mb-10">
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
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={500}
                  height={400}
                  className="w-full h-[240px] object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">
                  {p.name}
                </h3>

                <p className="text-green-900 font-bold mt-2">
                  ₹{p.price}
                </p>

                {/* Optional Description (if you add later in data) */}
                {"description" in p && (
                  <p className="text-sm text-gray-600 mt-2">
                    {(p as any).description}
                  </p>
                )}

                <button className="mt-4 bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold">
            Want to Order in Bulk?
          </h3>

          <p className="mt-2 text-gray-700">
            For large orders or special requirements, feel free to contact us.
          </p>

          <a
            href="/contact"
            className="inline-block mt-4 btn-primary"
          >
            Contact for Orders
          </a>
        </div>

      </div>
    </section>
  );
}
