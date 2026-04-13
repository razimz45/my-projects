"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const links = [
  { href: "/", label: "Home" },
  { href: "/admin", label: "Menu" },
  { href: "/menu/res", label: "Make a Reservation" },
  { href: "/menu/h", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#121618] text-white">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo (centered in mobile, left in desktop) */}
        <Link
          href="/"
          className="font-semibold tracking-wide flex items-center justify-center md:justify-start mx-auto md:mx-0"
        >
          <Image
            src="/logo.png"
            alt="Deep Net Soft Logo"
            className="inline-block h-8 w-8 mr-2"
            width={32}
            height={32}
          />
          <h1 className="hidden md:flex text-xl font-medium flex-col">
            <span>
              <span className="text-[#C5A059]">DEEP </span>
              <span className="text-white">NET </span>
            </span>
            <span className="text-[#857878] ">SOFT</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`transition-colors duration-200 ${
                    active ? "text-[#C5A059]" : "text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden absolute right-4 top-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#121618] border-t border-gray-700">
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)} // close menu on click
                    className={`transition-colors duration-200 ${
                      active ? "text-[#C5A059]" : "text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
