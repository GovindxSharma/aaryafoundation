"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  {
    name: "Yogesh Hiralal Bhutada",
    role: "Co-founder Atmaya Foundation",
    image: "/adv1.png",
  },
  {
    name: "Sudipta Chattoraj",
    role: "Community Outreach Support",
    image: "/sudipta.jpeg",
  },
  {
    name: "Deepali Salunkhe",
    role: "Community Outreach Support",
    image: "/diplai.jpeg",
  },
  {
    name: "Nisha Sane",
    role: "Community Outreach Support",
    image: "/coreteam.png",
  },
  {
    name: "Devang Khandhar",
    role: "Community Outreach Support",
    image: "/devang.jpeg",
  },
  {
    name: "Rahul Joshi",
    role: "Community Outreach Support",
    image: "/rahul.jpeg",
  },
  {
    name: "Kiran Vake",
    role: "Community Outreach Support",
    image: "/kiran.jpeg",
  },
];

export default function TeamSection() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  // 🔥 Handle responsiveness
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640)
        setCardsToShow(1); // mobile
      else if (window.innerWidth < 1024)
        setCardsToShow(2); // tablet
      else setCardsToShow(4); // desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // 🔁 Infinite navigation
  const next = () => {
    setIndex((prev) => (prev + 1) % team.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <section className="mt-20 md:mt-0 px-4">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">Core Team</h2>
      </div>

      {/* CAROUSEL */}
      <div className="mt-14 relative overflow-hidden">
        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

        {/* TRACK */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / cardsToShow)}%)`,
          }}
        >
          {team.concat(team).map((member, i) => (
            <div
              key={i}
              style={{ width: `${100 / cardsToShow}%` }}
              className="flex-shrink-0 px-2 md:px-3"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* IMAGE */}
                <div className="relative w-full aspect-[3/4] bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 md:p-5 text-center">
                  <h3 className="text-sm md:text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-green-900 text-xs md:text-sm mt-1 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
