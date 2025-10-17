"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false); // 👈 new state

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark/light mode to <body>
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#04003f";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  return (
    <nav
      className={`mx-4 mt-4 px-6 py-4 shadow-md rounded-[2rem] transition-colors duration-300 
        ${darkMode ? "bg-[#04003f] text-white" : "bg-gray-100 text-black"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="My Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-lg">NodeFleet</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium items-center relative">
          <Link href="/">Home</Link>

          {/* About with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <button className="hover:text-blue-500 transition-colors duration-300 flex items-center">
              About ▾
            </button>

            {/* Dropdown Menu */}
            {aboutDropdown && (
              <div
                className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg border
                            ${darkMode ? "bg-[#04003f] border-gray-600" : "bg-white border-gray-300"}`}
              >
                <ul className="flex flex-col text-left">
                  <li>
                    <Link
                      href="/about/job-opening"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-t-lg"
                    >
                      Job Opening
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/software-development"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-900"
                    >
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/services"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-900"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/game-opening"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-b-lg"
                    >
                      Game Opening
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/Our Technology">Our Technology</Link>
          <Link href="/Our Portfolio">Our Portfolio</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Services">Services</Link>
          <Link href="/contact">Contact</Link>

          {/* Switch Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 rounded-full shadow text-sm font-medium 
                       transition-colors duration-300 
                       bg-gray-200 text-black hover:bg-gray-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-6">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>

          {/* About dropdown inside mobile */}
          <div>
            <button
              onClick={() => setAboutDropdown(!aboutDropdown)}
              className="flex justify-between w-full"
            >
              About ▾
            </button>
            {aboutDropdown && (
              <div className="flex flex-col pl-4 mt-2 space-y-2">
                <Link href="/about/job-opening" onClick={() => setOpen(false)}>Job Opening</Link>
                <Link href="/about/software-development" onClick={() => setOpen(false)}>Software Development</Link>
                <Link href="/about/services" onClick={() => setOpen(false)}>Services</Link>
                <Link href="/about/game-opening" onClick={() => setOpen(false)}>Game Opening</Link>
              </div>
            )}
          </div>

          <Link href="/Our Technology" onClick={() => setOpen(false)}>Our Technology</Link>
          <Link href="/Our Portfolio" onClick={() => setOpen(false)}>Our Portfolio</Link>
          <Link href="/Projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/Services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* Switch Button */}
          <button
            onClick={toggleTheme}
            className="mt-2 px-4 py-2 rounded-full shadow text-sm font-medium 
                       transition-colors duration-300 
                       bg-gray-200 text-black hover:bg-gray-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
