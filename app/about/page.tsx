import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50/40">
      <div className="container mx-auto px-5 max-w-6xl">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              About Aarya Foundation
            </h1>

            <p className="mt-4 text-xl text-gray-600">
              Gaushala, Seva, and a Home for Cows
            </p>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Founded by Seema Prasad Purohit and Prasad Govind Purohit,
              Aarya Foundation is a living story of compassion, healing,
              and devotion — creating a dignified life for cows while
              reviving desi farming wisdom and natural living.
            </p>
          </div>

          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/image.png"
              alt="Aarya Foundation Gaushala"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* INTRO */}
        <div className="mt-14 md:mt-20 max-w-4xl mx-auto text-center space-y-4">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            What began as a simple act of care slowly grew into a lifelong
            mission — to protect cows, heal families through traditional
            remedies, and build a compassionate self-reliant ecosystem.
          </p>
        </div>

        {/* VISION & MISSION */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-7 md:p-9 rounded-3xl shadow-md border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To rebuild a self-reliant ecosystem where cows live with
              dignity, traditional Indian wisdom is revived, and
              communities receive pure cow-based nourishment for body
              and spirit.
            </p>
          </div>

          <div className="bg-white p-7 md:p-9 rounded-3xl shadow-md border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
              <li>Rescue and shelter vulnerable cows with full care.</li>
              <li>Produce honest in-house cow products for sustainability.</li>
              <li>Spread awareness about organic and desi alternatives.</li>
              <li>Train farmers to build an Atmanirbhar model.</li>
            </ul>
          </div>
        </div>

        {/* JOURNEY */}
        <div className="mt-20 md:mt-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Our Journey
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
            <p>
              After 18 years as a hardware engineer, Prasad’s encounter
              with traditional Indian knowledge transformed his path.
              A personal health crisis guided the family toward desi
              remedies and milk — reshaping their life’s purpose.
            </p>

            <p>
              Beginning with just six cows, the mission survived
              relocations, financial hardship, breeding challenges,
              COVID-19 struggles, and even a life-threatening accident.
              Yet devotion never faded.
            </p>

            <p>
              Today, Aarya Foundation stands as a community-supported
              gaushala dedicated to compassion, sustainability, and
              service.
            </p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-20 md:mt-28 bg-green-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What We Make
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Pure cow milk",
              "Cold-pressed desi ghee",
              "Hair-care oil",
              "Dung-based household products",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-2xl shadow-sm text-center font-medium text-lg"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-700 text-lg">
            Every contribution directly supports feeding, medicine,
            and shelter for the cows.
          </p>
        </div>

        {/* HOW TO HELP */}
        <div className="mt-20 md:mt-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Be Part of This Seva
          </h2>

          <ul className="mt-8 space-y-3 text-gray-700 text-lg max-w-2xl mx-auto">
            <li>Donate to support daily care and fodder.</li>
            <li>Buy products that fund cow welfare.</li>
            <li>Sponsor a cow or calf.</li>
            <li>Provide medicines, fodder, or equipment.</li>
            <li>Volunteer or spread awareness.</li>
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/donation"
              className="bg-green-900 text-white px-8 py-3.5 rounded-2xl shadow hover:bg-green-800 transition text-lg font-semibold"
            >
              Donate Now
            </a>

            <a
              href="/contact"
              className="border border-green-900 text-green-900 px-8 py-3.5 rounded-2xl hover:bg-green-900 hover:text-white transition text-lg font-semibold"
            >
              Contact / Volunteer
            </a>
          </div>
        </div>

        {/* FINAL NOTE */}
        <div className="mt-20 md:mt-28 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A Living Promise
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            Aarya Foundation is more than a gaushala — it is a promise
            of compassion, healing, and sustainable tradition. Your
            support transforms struggle into a safe home for cows and
            the communities that depend on them.
          </p>
        </div>
      </div>
    </section>
  );
}
