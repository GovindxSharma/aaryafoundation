import Image from "next/image";

export default function About() {
  const stories = [
    {
      name: "Prasad Govind Purohit",
      title: "The Visionary Who Chose Seva Over Security",
      image: "/purohit.png", // change if needed
      content: (
        <>
          <p>
            In 2008, after spending 18 years in a stable hardware engineering
            career, Prasad Govind Purohit made a decision that changed his life
            forever. A meeting with Rajiv Dixit in Maharashtra opened his eyes
            to the forgotten science of Ayurveda, desi farming, and the sacred
            role of cows in Indian life.
          </p>

          <p>
            Coming from a scientific background, he was skeptical — until life
            tested him. When his wife Seema fell gravely ill in Belgaum, modern
            methods gave little relief. With faith and courage, Prasad turned to
            traditional desi remedies and pure cow milk and ghee.
          </p>

          <p>
            What he witnessed was not just recovery — it was transformation.
            Beginning with just six cows, his journey survived relocations,
            floods, fodder shortages, and even a life-threatening accident that
            left him bedridden.
          </p>

          <p className="font-semibold text-green-900">
            Today his dream is clear — to build a fully Atmanirbhar Gaushala
            rooted in Indian values and transparency.
          </p>
        </>
      ),
    },
    {
      name: "Seema Prasad Purohit",
      title: "The Heart That Speaks from Experience",
      image: "/seema.jpeg", // change if needed
      content: (
        <>
          <p>
            If Prasad Ji is the foundation, Seema Ji is the heartbeat of Aarya
            Foundation. A music teacher by profession and a sevika by spirit,
            she has devoted the last eight years to cow seva.
          </p>

          <p>
            Her journey is deeply personal. She experienced illness caused by
            unhealthy surroundings and poor lifestyle choices. Her healing
            began not in a hospital ward, but in the peaceful presence of cows,
            in pure desi milk, and in ghee made by hand.
          </p>

          <p>
            She does not speak from books — she speaks from lived truth. Today
            she creates milk, ghee, hair-care oils, and cow-dung household
            products entirely in-house.
          </p>

          <p className="font-semibold text-green-900">
            For her, this is not business. It is seva — for humans and for Gau
            Mata.
          </p>
        </>
      ),
    },
    {
      name: "Gaupalak Niraj Kantilal Purohit",
      title: "The Strategist Building an Atmanirbhar Future",
      image: "/neeraj.png", // change if needed
      content: (
        <>
          <p>
            Behind every mission that survives long-term, there is structure.
            Niraj Purohit brings that strength to Aarya Foundation with 20+
            years of marketing and business experience and 5+ years dedicated
            to cow-based initiatives.
          </p>

          <p>
            As Founder of Aatmaya Farms, he works across Maharashtra and parts
            of Gujarat helping Gaushalas transform from donation-dependent
            shelters into structured rural enterprises.
          </p>

          <p>
            His strategy focuses on high-quality cow products, transparent
            systems, and reliable income streams — ensuring Gau Seva stands on
            strong economics, not just emotion.
          </p>

          <p className="font-semibold text-green-900">
            His vision: Gaushalas as centers of rural entrepreneurship and
            Atmanirbhar growth.
          </p>
        </>
      ),
    },
  ];

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
              Aarya Foundation is a living story of compassion, healing, and
              devotion — creating dignified lives for cows while reviving desi
              farming wisdom and natural living.
            </p>
          </div>

          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/about.png"
              alt="Aarya Foundation Gaushala"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* STORIES HEADER */}
        <div className="mt-20 md:mt-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            The People Behind the Seva
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Three journeys. One mission. A lifelong commitment to Gau Seva and
            Atmanirbhar sustainability.
          </p>
        </div>

        {/* STORIES */}
        <div className="mt-14 md:mt-16 space-y-16">
          {stories.map((story, index) => (
            <div
              key={story.name}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
             <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
  <Image
    src={story.image}
    alt={story.name}
    fill
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
    className="object-contain"
    quality={90}
  />
</div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {story.name}
                </h3>

                <p className="mt-2 text-green-900 font-semibold text-lg">
                  {story.title}
                </p>

                <div className="mt-4 space-y-4 text-gray-700 text-lg leading-relaxed">
                  {story.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="mt-24 md:mt-28 text-center bg-green-50 rounded-3xl p-10 md:p-14">
          <h3 className="text-2xl md:text-3xl font-bold">
            Be Part of This Seva
          </h3>

          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Your support helps us feed, shelter, and protect every cow with
            dignity and love.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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
      </div>
    </section>
  );
}