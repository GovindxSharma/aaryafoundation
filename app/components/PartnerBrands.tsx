import Image from "next/image";

const partners = [
  { name: "Atmaya", logo: "/aatmaya.png" },
  { name: "Panchbhata", logo: "/panchbhata.png" },
];

export default function PartnerBrands() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-900">
            Our Trusted Partners
          </h2>
        </div>

        {/* Logo strip */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
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

      </div>
    </section>
  );
}