"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 dark:bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* How It Works */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              How It Works
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/Howitworks"
                  className="text-base text-gray-300 hover:text-white"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/Features"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Help & Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/FAQ"
                  className="text-base text-gray-300 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/Whyus"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AITutor. All rights reserved.</p>

          {/* Social Icons */}
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>Twitter</title>
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69M19 0C7.6 0 0 7.6 0 19s7.6 19 19 19 19-7.6 19-19-7.6-19-19-19z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white" aria-label="YouTube">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>YouTube</title>
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-7 15V9l6 3-6 3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>Facebook</title>
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.795.142v3.24h-1.917c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
