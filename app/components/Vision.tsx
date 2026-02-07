export default function Vision() {
    return (
      <section className="py-16 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Vision & Mission
        </h2>
  
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Arya Foundation is dedicated to protecting cows, promoting natural living,
          and building a compassionate ecosystem for future generations.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  
          {/* Card 1 */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">
              Protection of Cows
            </h3>
            <p className="text-gray-600">
              Providing shelter, food, medical care, and lifelong safety to abandoned and rescued cows.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">
              Natural Living
            </h3>
            <p className="text-gray-600">
              Encouraging organic farming, cow-based products, and a lifestyle in harmony with nature.
            </p>
          </div>
  
          {/* Card 3 */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">
              Community Awareness
            </h3>
            <p className="text-gray-600">
              Spreading awareness about the importance of Gauseva and building a compassionate society.
            </p>
          </div>
  
        </div>
  
        <div className="mt-10">
          <a
            href="/about"
            className="btn-primary"
          >
            Learn More About Us
          </a>
        </div>
  
      </section>
    );
  }
  