import Image from "next/image";

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Arya Foundation
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            A humble initiative dedicated to the service and protection of cows,
            nature, and compassionate living.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Journey
            </h2>

            <p className="text-gray-700 leading-relaxed">
              From humble beginnings, Arya Foundation was born out of pure love
              for Gaumata. What started as caring for a few abandoned cows slowly
              turned into a full-time mission of compassion and service.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              With dedication, hard work, and the blessings of supporters,
              we have built a peaceful gaushala where cows live safely,
              receive medical care, proper food, and endless love.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Today Arya Foundation is not just a shelter, but a growing
              ecosystem promoting natural living and cow-based sustainability.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/image.png"
              alt="Arya Foundation Gaushala"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Cows Section */}
        <div className="mt-16 bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center">
            Our Beloved Cows
          </h2>

          <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
            We currently care for more than <b>25+ rescued cows</b>,
            including injured, abandoned, and old cows who have nowhere else to go.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold">Safe Shelter</h3>
              <p className="text-gray-600 mt-2">
                Clean and spacious living area for all cows.
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-semibold">Healthy Food</h3>
              <p className="text-gray-600 mt-2">
                Nutritious fodder and proper daily diet.
              </p>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-semibold">Medical Care</h3>
              <p className="text-gray-600 mt-2">
                Regular checkups and treatment for every cow.
              </p>
            </div>
          </div>
        </div>

        {/* Future Ecosystem */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center">
            Building a Complete Ecosystem
          </h2>

          <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
            Arya Foundation aims to create a self-sustaining ecosystem based on cows,
            nature, and community support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="border p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Organic Farming</h3>
              <p className="text-gray-600 mt-2">
                Promoting natural farming using cow-based fertilizers.
              </p>
            </div>

            <div className="border p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Cow-Based Products</h3>
              <p className="text-gray-600 mt-2">
                Pure ghee, dhoop sticks, fertilizers, and other natural products.
              </p>
            </div>

            <div className="border p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Training & Awareness</h3>
              <p className="text-gray-600 mt-2">
                Educating people about Gauseva and sustainable living.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">
            Support Our Mission
          </h3>

          <p className="mt-3 text-gray-700">
            You can contribute through shram daan, product purchases, or donations.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/donation" className="btn-primary">
              Donate for Welfare
            </a>

            <a
              href="/contact"
              className="border border-green-900 text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition"
            >
              Shram Daan / Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
