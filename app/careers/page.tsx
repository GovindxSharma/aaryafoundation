"use client";

import React from "react";
import Image from "next/image";

const CareerPage = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/919712935176", "_blank");
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-green-50 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
              Join Gau Seva with
              <span className="block text-green-700">
                Aarya Foundation
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Become part of our sacred mission to protect, feed, and care for
              Gau Mata. Your time and compassion can bring real change to
              innocent lives.
            </p>

            <button
              onClick={openWhatsApp}
              className="mt-8 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Join as Volunteer
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about.png"
              alt="Aarya Foundation Gau Seva"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Why Gau Seva Matters
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Aarya Foundation is dedicated to rescuing abandoned and injured
            cows, providing nutritious food, proper medical care, and a safe
            shelter. Through the support of volunteers, we maintain our
            gaushalas, conduct rescue missions, and spread awareness about the
            importance of Gau Seva in society.
          </p>
        </div>
      </section>

      {/* ================= WAYS TO SERVE ================= */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Ways You Can Serve
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Gaushala Seva",
                desc: "Support daily feeding, cleaning, and loving care of cows.",
              },
              {
                title: "Rescue Support",
                desc: "Assist our team during emergency rescue operations.",
              },
              {
                title: "Event Volunteer",
                desc: "Help manage awareness drives and foundation events.",
              },
              {
                title: "Digital Seva",
                desc: "Contribute through social media and online awareness.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-xl text-green-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            Ready to Begin Your Seva Journey?
          </h2>

          <p className="mt-4 text-gray-700 text-lg">
            Our team will personally guide you. Connect with us on WhatsApp and
            start your Gau Seva with Aarya Foundation.
          </p>

          <button
            onClick={openWhatsApp}
            className="mt-8 bg-green-900 hover:bg-green-800 text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            Chat on WhatsApp
          </button>
        </div>
      </section>
    </>
  );
};

export default CareerPage;