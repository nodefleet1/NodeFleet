"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-100 shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    
    {/* Logo (left side) */}
    <Link href="/" className="flex items-center space-x-2 ml-0">
      <Image 
        src="/logo.png" 
        alt="My Logo" 
        width={90} 
        height={50} 
        priority
        className="rounded-2xl border border-gray-300 shadow-md"
      />
      {/* <span className="text-2xl font-bold text-blue-700">MyCompany</span> */}
    </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/our-technology">Our Technology</Link>
          <Link href="/our-portfolio">Our Portfolio</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-blue-100 border-t px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/our-technology" onClick={() => setOpen(false)}>Our Technology</Link>
          <Link href="/our-portfolio" onClick={() => setOpen(false)}>Our Portfolio</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
