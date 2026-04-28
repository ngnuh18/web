'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Introduce", path: "/introduce" },
    { name: "Menu", path: "/menu" },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-white tracking-wide hover:text-cyan-400 transition"
        >
          The Pet Vietnam
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 font-medium">

          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`relative px-3 py-1.5 rounded-lg group transition
              ${pathname === item.path ? "text-white bg-white/10" : "text-gray-300"}`}
            >
              <span className="relative z-10 group-hover:text-white transition">
                {item.name}
              </span>

              {/* nền hover */}
              <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              {/* gạch chân */}
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
              ${pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          ))}

          {/* Login Button PRO */}
          <Link
            href="/contact"
            className="relative px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden
            bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500
            bg-[length:200%_100%] hover:bg-[position:100%_0]
            shadow-lg hover:shadow-cyan-400/50
            transition-all duration-500 hover:scale-105 active:scale-90 group"
          >
            <span className="relative z-10">Contact</span>

            {/* lớp sáng mờ */}
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition"></span>

            {/* ánh sáng chạy */}
            <span className="absolute -left-full top-0 w-full h-full 
            bg-gradient-to-r from-transparent via-white/40 to-transparent 
            group-hover:left-full transition-all duration-700"></span>
          </Link>

        </div>
      </div>
    </nav>
  );
}