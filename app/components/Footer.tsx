import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Aarya Foundation</h3>
          <p className="text-gray-300">
            Dedicated to the protection and welfare of cows, promoting natural living,
            and spreading compassion through Gauseva.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/products" className="hover:text-yellow-400">Products</Link></li>
            <li><Link href="/donation" className="hover:text-yellow-400">Donate</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">
            Aarya Foundation Gaushala<br />
            Village Area, City, State<br />
            India
          </p>

          <p className="mt-3 text-gray-300">
            Phone: +91 9876543210
          </p>

          <p className="text-gray-300">
            Email: info@aaryafoundation.org
          </p>
        </div>

        {/* Social & Donate */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support Us</h3>
          <p className="text-gray-300 mb-4">
            Every donation helps us provide food, shelter and medical care to cows.
          </p>

          <Link
            href="/donation"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Donate Now
          </Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 text-center py-4 text-gray-300">
        © {new Date().getFullYear()} Aarya Foundation – Gauseva Initiative. All Rights Reserved.
      </div>
    </footer>
  );
}
