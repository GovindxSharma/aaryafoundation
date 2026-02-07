"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Donation", path: "/donation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-green-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              Aarya Foundation
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`hover:text-yellow-400 transition ${
                  pathname === link.path
                    ? "text-yellow-300 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/donation"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Donate Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 hover:text-yellow-400 ${
                pathname === link.path ? "text-yellow-300" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/donation"
            onClick={() => setIsOpen(false)}
            className="block mt-2 bg-yellow-400 text-black text-center px-4 py-2 rounded-lg font-semibold"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
