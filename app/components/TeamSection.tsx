"use client";

import Image from "next/image";

const coreTeam = [
  {
    name: "Nisha Sane",
    role: "Work From Home Volunteer",
    image: "/coreteam.png",
  },
];

const advisoryBoard = [
  {
    name: "Yogesh Hiralal Bhutada",
    role: "Co-founder Atmaya Foundation",
    image: "/adv1.png",
  },
];

export default function TeamSection() {
  return (
    <section className="mt-20 md:mt-28 px-4">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">
          The People Behind Aarya Foundation
        </h2>

        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Dedicated individuals working together to protect, nurture,
          and serve Gau Mata with devotion and responsibility.
        </p>
      </div>

      {/* CORE TEAM */}
      <div className="mt-14">

        <h3 className="text-xl md:text-2xl font-semibold text-center text-green-900">
          Core Team
        </h3>

        <div className="mt-8 flex flex-wrap justify-center gap-6">

          {coreTeam.map((member) => (
            <div
              key={member.name}
              className="w-[160px] sm:w-[200px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 text-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-green-100 bg-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <h3 className="mt-4 text-sm sm:text-base font-semibold">
                {member.name}
              </h3>

              <p className="text-green-900 text-sm mt-1">
                {member.role}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* ADVISORY BOARD */}
      <div className="mt-16 md:mt-20">

        <h3 className="text-xl md:text-2xl font-semibold text-center text-green-900">
          Advisory Board
        </h3>

        <div className="mt-8 flex flex-wrap justify-center gap-6">

          {advisoryBoard.map((member) => (
            <div
              key={member.name}
              className="w-[160px] sm:w-[200px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 text-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-green-100 bg-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <h3 className="mt-4 text-sm sm:text-base font-semibold">
                {member.name}
              </h3>

              <p className="text-green-900 text-sm mt-1">
                {member.role}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}