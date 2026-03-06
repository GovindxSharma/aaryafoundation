import { MapPin } from "lucide-react";

const outlets = [
  {
    city: "Mulund, Mumbai",
    state: "Maharashtra",
    address: "Mulund West, Mumbai, Maharashtra 400080",
  },
  {
    city: "Shirwal",
    state: "Maharashtra",
    address: "Shirwal, Satara, Maharashtra 412801",
  },
];

export default function OutletStores() {
  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-900">
            Our Outlet Stores
          </h2>
          <p className="text-gray-600 mt-2">
            Visit your nearby outlet store today.
          </p>
        </div>

        {/* Outlet List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {outlets.map((outlet, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-lg p-5 border border-green-100 shadow-sm"
            >
              <MapPin className="text-green-700 mt-1" size={22} />

              <div>
                <h3 className="font-semibold text-green-900">
                  {outlet.city}
                </h3>
                <p className="text-gray-600 text-sm">
                  {outlet.address}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}