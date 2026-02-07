"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Aarya Foundation
          </h1>

          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Have questions about Gauseva, donations, volunteering or our initiatives?  
            Reach out to us anytime – we are here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* CONTACT DETAILS */}
          <div className="bg-white p-8 rounded-lg shadow space-y-6">

            <h2 className="text-2xl font-bold">
              Get in Touch
            </h2>

            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-700">
                Aarya Foundation Ashram,  
                Near Gauseva Dham,  
                Your City, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-700">+91 9876543210</p>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-700">info@aaryafoundation.com</p>
            </div>

            <div>
              <h3 className="font-semibold">Connect Instantly</h3>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="inline-block mt-2 text-green-900 font-semibold hover:underline"
              >
                Chat with us on WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-semibold">Visiting Hours</h3>
              <p className="text-gray-700">
                Monday – Sunday: 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-8 rounded-lg shadow">

            <h2 className="text-2xl font-bold mb-4">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded text-center">
                <h3 className="text-xl font-bold text-green-900">
                  Thank You!
                </h3>

                <p className="mt-2">
                  We have received your message and will respond soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  placeholder="Full Name"
                  className="border p-3 w-full rounded"
                  required
                />

                <input
                  placeholder="Email Address"
                  type="email"
                  className="border p-3 w-full rounded"
                  required
                />

                <input
                  placeholder="Phone Number"
                  className="border p-3 w-full rounded"
                  required
                />

                <textarea
                  placeholder="Your Message"
                  className="border p-3 w-full rounded"
                  rows={4}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-full"
                >
                  Send Query
                </button>

              </form>
            )}
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            Visit Us
          </h2>

          <div className="w-full h-[350px]">
            <iframe
              className="w-full h-full rounded"
              src="https://www.google.com/maps?q=india&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-12 text-center bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold">
            Join Hands for Gauseva
          </h3>

          <p className="mt-3 text-gray-700">
            Whether you wish to donate, volunteer or simply visit our gaushala,  
            we welcome you with open hearts.
          </p>
        </div>

      </div>
    </section>
  );
}
