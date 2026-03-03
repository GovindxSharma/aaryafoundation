"use client";

import Image from "next/image";

const partners = [
  { name: "Atmaya", logo: "/1.png" },
  { name: "Panchbhata", logo: "/panchbhata.png" },
  { name: "GouKripa", logo: "/goukripa.png" },
  { name: "Awbi", logo: "/awbi.png" },
];

export default function PartnerBrands() {
  // duplicate for seamless infinite loop
  const loopPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-2xl font-semibold text-green-900">
            Associated Brands
          </h2>
        </div>

        {/* Premium marquee */}
        <div className="relative w-full overflow-hidden">
          {/* left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />

          {/* right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* moving strip */}
          <div className="flex items-center gap-8 md:gap-14 animate-marquee w-max">
            {loopPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[130px] md:min-w-[180px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={120}
                  className="object-contain h-14 md:h-20 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}