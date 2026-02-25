"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  ShoppingBag,
  HeartHandshake,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
    { name: "Products", path: "/products", icon: <ShoppingBag size={20} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
    { name: "Careers", path: "/careers", icon: <Info size={20} /> },
  ];

  return (
    <nav className="bg-green-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
  <Image
    src="/aryalogo.png"
    alt="Aarya Foundation Logo"
    width={120}
    height={120}
    priority
    className="
      w-16 h-16 md:w-20 md:h-20
      object-contain
      brightness-0 invert
      drop-shadow-lg
    "
  />
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
            onClick={() => setIsOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* MOBILE APP STYLE DRAWER */}
      <div
        className={`
          fixed inset-0 z-50 md:hidden transition-all duration-300
          ${isOpen ? "visible" : "invisible"}
        `}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setIsOpen(false)}
          className={`
            absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm
            transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        ></div>

        {/* DRAWER PANEL */}
        <div
          className={`
            absolute top-0 left-0 h-full w-[80%] max-w-[320px]
            bg-white text-gray-900 shadow-xl p-6
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Image
                src="/aryalogo.png"
                alt="Aarya Foundation Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <h2 className="text-xl font-bold text-green-900">
                Aarya Foundation
              </h2>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-green-100 text-green-900"
            >
              <X size={22} />
            </button>
          </div>

          {/* NAV LINKS */}
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all
                  ${
                    pathname === link.path
                      ? "bg-green-900 text-white shadow"
                      : "hover:bg-green-50"
                  }
                `}
              >
                <span>{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* DONATE CTA */}
          <div className="mt-10">
            <Link
              href="/donation"
              className="flex items-center justify-center gap-2 bg-green-900 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-green-800 transition"
            >
              <HeartHandshake size={20} />
              Donate Now
            </Link>
          </div>

          {/* FOOTER TEXT */}
          <div className="absolute bottom-6 left-6 text-sm text-gray-500">
            Serving Gaumata with Love & Care ❤️
          </div>
        </div>
      </div>
    </nav>
  );
}