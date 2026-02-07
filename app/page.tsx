import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Story from "./components/Story";
import ProductPreview from "./components/ProductPreview";
import SevaSection from "./components/SevaSection";
import TestimonialImpact from "./components/TestimonialImpact";

export default function Home() {
  return (
    <main className="bg-green-50">
      
      {/* HERO SECTION */}
      <section className="animate-fadeIn">
        <Hero />
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <SevaSection />
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <Gallery />
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Story />
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <ProductPreview />
        </div>
      </section>

     
       
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <TestimonialImpact/>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-20 bg-linear-to-r from-green-700 to-green-500 text-white text-center">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold">
      Become a Part of Our Gauseva Family
    </h2>

    <p className="mt-4 text-gray-200">
      Your small contribution can bring a big change in the lives of cows.  
      Join Arya Foundation and help us build a compassionate and loving ecosystem.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/donation"
        className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
      >
        Donate Now
      </a>

      <a
        href="/contact"
        className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
