import Image from "next/image";

export default function Story() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image Side */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about.jpeg"
            alt="Founders of Aarya Foundation"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Inspiring Journey
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A devoted couple left their comfortable city life with one dream –  
            to serve Gaumata and create a safe haven for abandoned and injured cows.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            What started as a small act of compassion slowly turned into a full-time mission.  
            With faith, hard work, and the blessings of the community, Aarya Foundation was born.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Today, dozens of cows live peacefully in our gaushala, cared for with love,  
            proper food, medical attention, and a natural environment.
          </p>

          <p className="mt-4 font-semibold text-green-900">
            This journey continues – with your support and blessings.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="/about" className="btn-primary">
              Read Full Story
            </a>

            <a href="/donation" className="border border-green-900 text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition">
              Support Our Mission
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
