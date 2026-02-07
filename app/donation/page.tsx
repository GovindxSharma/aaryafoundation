"use client";

import Image from "next/image";
import { useState } from "react";

export default function Donation() {
  const [submitted, setSubmitted] = useState(false);

  const amounts = [101, 251, 501, 1001, 2100];

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
            Support Gauseva
          </h1>

          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Your contribution provides food, shelter, medical care and love to rescued cows.  
            As a token of gratitude, every donor receives a small gift from Aarya Foundation.
          </p>
        </div>

        {/* QUICK DONATION AMOUNTS */}
        <div className="mt-10 bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-6">
            Choose a Quick Donation Amount
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {amounts.map((amt) => (
              <button
                key={amt}
                className="border border-green-900 text-green-900 px-6 py-2 rounded-lg hover:bg-green-900 hover:text-white transition"
              >
                ₹{amt}
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Or donate any amount of your choice using the details below
          </p>
        </div>

        {/* PAYMENT DETAILS */}
        <div className="mt-10 bg-white p-8 rounded-lg shadow">

          <h2 className="text-2xl font-bold mb-6">
            Payment Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* BANK */}
            <div className="border p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">
                Bank Transfer
              </h3>

              <p><b>Account Name:</b> Aarya Foundation</p>
              <p><b>Account Number:</b> 1234567890</p>
              <p><b>IFSC Code:</b> ABCD0123456</p>
              <p><b>Bank:</b> State Bank of India</p>
              <p><b>Branch:</b> Your City Branch</p>
            </div>

            {/* UPI */}
            <div className="border p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">
                UPI Payment
              </h3>

              <p className="text-xl font-bold text-green-900">
                aaryafoundation@upi
              </p>

              <div className="mt-4 flex flex-col items-center">
                <p className="text-sm text-gray-600 mb-2">
                  Scan to Donate
                </p>

                <Image
                  src="/upi-qr.png"
                  alt="UPI QR Code"
                  width={200}
                  height={200}
                  className="border rounded"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="inline-block text-green-900 font-semibold hover:underline"
            >
              Need help donating? Chat with us on WhatsApp
            </a>
          </div>

        </div>

        {/* DONATION FORM */}
        <div className="mt-10 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">
            Share Donation Details
          </h2>

          <p className="text-gray-700 mb-6">
            After donating, kindly submit your details and payment proof so we can send you a token of love.
          </p>

          {submitted ? (
            <div className="text-center p-6 bg-green-50 border border-green-200 rounded">
              <h3 className="text-xl font-bold text-green-900">
                Thank You for Your Support!
              </h3>

              <p className="mt-2">
                We have received your details. Our team will contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Full Name"
                  className="border p-3 w-full rounded"
                  required
                />

                <input
                  placeholder="Email Address"
                  className="border p-3 w-full rounded"
                  type="email"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Phone Number"
                  className="border p-3 w-full rounded"
                  required
                />

                <input
                  placeholder="Donation Amount"
                  className="border p-3 w-full rounded"
                  type="number"
                  required
                />
              </div>

              <textarea
                placeholder="Full Address (For sending token of love)"
                className="border p-3 w-full rounded"
                rows={3}
              ></textarea>

              <div>
                <label className="block mb-2 text-gray-700">
                  Upload Payment Screenshot
                </label>

                <input type="file" className="w-full" required />
              </div>

              <button
                type="submit"
                className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-full"
              >
                Submit Donation Details
              </button>

            </form>
          )}
        </div>

        {/* IMPACT SECTION */}
        <div className="mt-12 text-center bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold">
            Where Your Donation Goes
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h4 className="font-semibold">Food & Fodder</h4>
              <p className="text-gray-700 mt-2">
                Daily meals and nutrition for rescued cows
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Medical Care</h4>
              <p className="text-gray-700 mt-2">
                Treatment and medicines for injured cows
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Shelter</h4>
              <p className="text-gray-700 mt-2">
                Clean and safe living environment
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
