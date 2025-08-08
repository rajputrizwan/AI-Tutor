"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* How It Works */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 tracking-wider uppercase">
              How It Works
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/Howitworks"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/Features"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 tracking-wider uppercase">
              Help & Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/FAQ"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/Whyus"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AITutor. All rights reserved.</p>

          {/* Social Icons */}
          <div className="mt-4 sm:mt-0 flex space-x-6">
            {[
              { href: "#", label: "Twitter" },
              { href: "#", label: "YouTube" },
              { href: "#", label: "Facebook" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="hover:text-black dark:hover:text-white"
                aria-label={label}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>{label}</title>
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
