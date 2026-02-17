import Image from "next/image";

export default function Gallery() {
  const images: string[] = [
    "/babycow.jpeg",
   "/cow.jpeg",
   "/cowcare.jpeg",
   "/cowcare1.jpeg",
   "/cowcare2.jpeg",
   "/cc.jpeg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Our Gaushala Gallery</h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A glimpse into the peaceful lives of cows living with love, care, and protection at Aarya Foundation.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
        <div
        key={i}
        className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white"
      >
        <div className="w-full h-64 flex items-center justify-center overflow-hidden">
          <Image
            src={img}
            alt={`Gaushala image ${i + 1}`}
            width={600}
            height={400}
            className="object-contain max-h-full w-auto hover:scale-105 transition duration-300"
          />
        </div>
      </div>
      
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="/about" className="btn-primary">
          View More Photos
        </a>
      </div>
    </section>
  );
}
