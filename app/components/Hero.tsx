export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
     

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl mx-auto text-white animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Serving Gaumata with  
          <span className="text-yellow-400"> Love & Care</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl">
          Join Arya Foundation in protecting cows, nurturing nature,  
          and spreading compassion across the world.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/donation"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Donate Now
          </a>

          <a
            href="/about"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition"
          >
            Know Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
