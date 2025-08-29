"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="bg-[#04003f] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        
    <Link href="/" className="flex items-center space-x-2">
  <motion.div
    animate={{
      rotateX: [0, 360],  // full cube rotation up-down
      rotateY: [0, 360],  // full cube rotation left-right
    }}
    transition={{
      repeat: Infinity,   // infinite loop
      duration: 5,        // speed (lower = faster)
      ease: "linear",     // smooth constant speed
    }}
    className="p-1 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#1e1e5a] to-[#020024]"
    style={{ perspective: 1000 }}
  >
    <Image 
      src="/logo.png" 
      alt="My Logo" 
      width={90} 
      height={90}   // make it square for cube-like rotation
      priority
      className="rounded-2xl"
    />
  </motion.div>
</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-white font-medium">
          {["Home", "About", "Our Technology", "Our Portfolio", "Projects", "Services","Bloag", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-sky-400 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden border-t px-6 py-4 space-y-4 bg-[#04003f] text-white"
          >
            {["Home", "About", "Our Technology", "Our Portfolio", "Projects", "Services","Bloag", "Contact"].map((item, i) => (
              <motion.div key={i} variants={linkVariants}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
