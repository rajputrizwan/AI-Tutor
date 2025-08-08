// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   SignedIn,
//   SignedOut,
//   UserButton,
//   SignInButton,
//   SignUpButton,
// } from "@clerk/nextjs";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const router = useRouter();

//   const toggleMobileMenu = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Section links (scroll on home page)
//   const sectionLinks = [
//     { name: "Home", href: "#home" },
//     { name: "How It Works", href: "#how-it-works" },
//     { name: "Who It's For", href: "#who-its-for" },
//     { name: "Why Us", href: "#why-us" },
//   ];

//   // Normal page links
//   const pageLinks = [
//     { name: "Features", href: "/Features" },
//     { name: "Services", href: "/Services" },
//     { name: "Contact", href: "/Contact" },
//     { name: "FAQ", href: "/FAQ" },
//   ];

//   const handleScroll = (e, href) => {
//     e.preventDefault();
//     const path = window.location.pathname;

//     if (path === "/") {
//       // Already on homepage → scroll directly
//       const target = document.getElementById(href.slice(1));
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       // Go to homepage with hash
//       router.push(`/${href}`);
//     }

//     setMobileOpen(false);
//   };

//   return (
//     <header className="bg-gray-200 dark:bg-gray-900 shadow-md rounded-b-xl px-6 py-4 flex items-center justify-between sticky top-0 z-50">
//       {/* Logo */}
//       <Link href="/" className="flex items-center gap-2">
//         <Image
//           src="/aitutor-logo.png"
//           alt="AITutor Logo"
//           width={40}
//           height={40}
//           className="object-contain"
//         />
//         <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
//           AITutor
//         </span>
//       </Link>

//       {/* Desktop Nav */}
//       <nav className="hidden md:flex gap-8 font-medium text-sm">
//         {sectionLinks.map((link) => (
//           <a
//             key={link.name}
//             href={link.href}
//             onClick={(e) => handleScroll(e, link.href)}
//             className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
//           >
//             {link.name}
//           </a>
//         ))}
//         {pageLinks.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="hover:text-blue-600 dark:hover:text-blue-400"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Auth Buttons (Desktop) */}
//       <div className="hidden md:flex items-center gap-3">
//         <SignedOut>
//           <div className="flex items-center gap-2">
//             <SignInButton />
//             <SignUpButton>
//               <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//                 Sign Up
//               </button>
//             </SignUpButton>
//           </div>
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={toggleMobileMenu}
//         className="md:hidden p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-800"
//       >
//         {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Mobile Dropdown */}
//       {mobileOpen && (
//         <div className="absolute top-16 right-4 w-56 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-3 z-50 md:hidden">
//           {sectionLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={(e) => handleScroll(e, link.href)}
//               className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
//             >
//               {link.name}
//             </a>
//           ))}
//           {pageLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="hover:text-blue-600 dark:hover:text-blue-400"
//               onClick={() => setMobileOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
//             <SignedOut>
//               <div className="flex flex-col gap-2">
//                 <SignInButton />
//                 <SignUpButton>
//                   <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer">
//                     Sign Up
//                   </button>
//                 </SignUpButton>
//               </div>
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const sectionLinks = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Who It's For", href: "#who-its-for" },
    { name: "Why Us", href: "#why-us" },
  ];

  const pageLinks = [
    { name: "Features", href: "/Features" },
    { name: "Services", href: "/Services" },
    { name: "Contact", href: "/Contact" },
    { name: "FAQ", href: "/FAQ" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const path = window.location.pathname;

    if (path === "/") {
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/${href}`);
    }
    setMobileOpen(false);
  };

  return (
    <header className="bg-gray-200 dark:bg-gray-900 shadow-md rounded-b-xl px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/aitutor-logo.png"
          alt="AITutor Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
          AITutor
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 font-medium text-sm">
        {sectionLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
          >
            {link.name}
          </a>
        ))}
        {pageLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Auth + Theme Toggle (Desktop) */}
      <div className="hidden md:flex items-center gap-3">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Theme Toggle */}
        {mounted && (
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-800"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-16 right-4 w-56 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-3 z-50 md:hidden">
          {sectionLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-gray-300 dark:border-gray-700 pt-3 flex items-center justify-between">
            <SignedOut>
              <div className="flex flex-col gap-2">
                <SignInButton />
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Theme Toggle (Mobile) */}
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
