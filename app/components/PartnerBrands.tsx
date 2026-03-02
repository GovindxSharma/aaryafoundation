"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const partners = [
  { name: "Atmaya", logo: "/atmaya.png" },
  { name: "Panchbhata", logo: "/panchbhata.png" },
  { name:"GouKripa", logo: "/goukripa.png" },
];

export default function PartnerBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // simple auto scroll for mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.scrollBy({ left: 150, behavior: "smooth" });

      // loop back
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-900">
            Our Trusted Partners
          </h2>
        </div>

        {/* ✅ Desktop strip */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-14">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.logo}
              alt={partner.name}
              width={130}
              height={60}
              className="object-contain"
            />
          ))}
        </div>

        {/* ✅ Mobile carousel */}
        <div
          ref={scrollRef}
          className="
            md:hidden
            flex
            gap-10
            overflow-x-auto
            scrollbar-hide
            px-2
          "
        >
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="min-w-[130px] flex justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}