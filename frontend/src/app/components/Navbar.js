"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark/light mode to <body>
  useEffect(() => {
    if (darkMode) {  
      document.body.style.backgroundColor = "#04003f"; // custom dark bg
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
        
        {/*  Logo with Image */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png"   // put your logo in public/logo.png
            alt="My Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-lg">NodeFleet</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
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
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/Our Technology" onClick={() => setOpen(false)}>Our Technology</Link>
          <Link href="/Our Portfolio" onClick={() => setOpen(false)}>Our Portfolio</Link>
          <Link href="/Projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/Services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* Switch Button for Mobile */}
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
