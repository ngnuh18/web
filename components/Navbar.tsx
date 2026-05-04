'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Introduce", path: "/introduce" },
    { name: "Menu", path: "/menu" },
    { name: "Information", path: "/information" }
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-2xl font-bold text-white hover:text-cyan-400 transition"
        >
          The Pet Vietnam
        </Link>

        {/* Mobile button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">

          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`px-3 py-1.5 rounded-lg transition ${pathname === item.path
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Contact button (fixed đẹp + ổn định) */}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl font-semibold text-white
            bg-gradient-to-r from-pink-500 via-cyan-500 to-pink-500
            bg-[length:200%_100%] bg-left
            shadow-lg shadow-pink-500/20
            transition-all duration-500
            hover:bg-right hover:scale-105 hover:shadow-cyan-400/40
            active:scale-95"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-black/20 backdrop-blur-md">

          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg transition ${pathname === item.path
                  ? "bg-white/20 text-white"
                  : "text-gray-300"
                }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-xl font-semibold text-white text-center
            bg-gradient-to-r from-pink-500 via-cyan-500 to-pink-500
            bg-[length:200%_100%] bg-left
            shadow-lg shadow-pink-500/20
            transition-all duration-500
            hover:bg-right hover:scale-105"
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}