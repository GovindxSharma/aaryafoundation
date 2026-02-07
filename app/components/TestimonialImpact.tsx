"use client";

import { useEffect, useState } from "react";
import { Heart, Leaf, Home, Stethoscope, Quote } from "lucide-react";

export default function TestimonialImpact() {
  const [current, setCurrent] = useState(0);

  const impactData = [
    {
      amount: "₹501",
      text: "One Day Green Fodder for Cows",
      icon: <Leaf className="text-green-800" size={28} />,
    },
    {
      amount: "₹1100",
      text: "Nutritious Meal for 10 Cows",
      icon: <Heart className="text-red-600" size={28} />,
    },
    {
      amount: "₹2100",
      text: "Medical Care & Medicines",
      icon: <Stethoscope className="text-blue-700" size={28} />,
    },
    {
      amount: "₹5100",
      text: "One Month Shelter Support",
      icon: <Home className="text-yellow-600" size={28} />,
    },
  ];

  const testimonials = [
    {
      name: "Anjali Sharma",
      lang: "Hindi",
      message:
        "आर्य फाउंडेशन को दान देकर मुझे आत्मिक शांति मिली। यह जानकर बहुत खुशी होती है कि मेरी छोटी सी मदद से गायों का जीवन बेहतर बन रहा है।",
    },
    {
      name: "Rohit Mehta",
      lang: "English",
      message:
        "I personally visited the gaushala and saw the dedication of the team. Genuine work, true transparency and real compassion.",
    },
    {
      name: "Pooja Verma",
      lang: "Hindi",
      message:
        "गौसेवा से बढ़कर कोई सेवा नहीं। आर्य फाउंडेशन बहुत ही नेक कार्य कर रहा है, मैं गर्व से नियमित दान करती हूँ।",
    },
    {
      name: "Vikas Rao",
      lang: "English",
      message:
        "Every rupee donated here is used for the right purpose. The care they give to cows is truly inspiring.",
    },
    {
      name: "Neha Gupta",
      lang: "Hindi",
      message:
        "यह संस्था सच में दिल से काम करती है। दान करने के बाद जब तस्वीरें और अपडेट मिलते हैं तो मन प्रसन्न हो जाता है।",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Your Donation – Their Better Life
          </h2>
          <p className="mt-3 text-gray-600">
            See how every contribution creates real impact
          </p>
        </div>

        {/* IMPORTANT: MATCHED HEIGHT GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE – IMPACT CARDS (FULL HEIGHT) */}
          <div className="flex flex-col justify-between bg-green-50 p-6 rounded-lg shadow min-h-[420px]">

            <div className="space-y-4">
              {impactData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white border border-green-100 p-4 rounded-lg hover:shadow-md transition"
                >
                  <div className="bg-green-50 p-3 rounded-full shadow">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-green-900">
                      {item.amount}
                    </h3>
                    <p className="text-gray-800">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center md:text-left">
              <a
                href="/donation"
                className="inline-block bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
              >
                Donate Now
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – TESTIMONIAL CAROUSEL (MATCHED HEIGHT) */}
          <div className="relative bg-green-50 p-10 rounded-lg shadow flex items-center min-h-[420px]">

            <Quote
              className="absolute top-6 left-6 text-green-900 opacity-20"
              size={70}
            />

            <div className="w-full text-center transition-all duration-500 ease-in-out">

              <p className="italic text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
                “{testimonials[current].message}”
              </p>

              <p className="mt-6 font-bold text-green-900 text-xl">
                – {testimonials[current].name}
              </p>

              <p className="text-sm text-gray-600 mt-1">
                {testimonials[current].lang}
              </p>

              {/* DOT NAVIGATION */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      current === i
                        ? "bg-green-900 w-6"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
