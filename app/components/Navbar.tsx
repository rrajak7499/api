"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight">
          BridgePort
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">

          <Link href="/docs" className="hover:text-white transition">
            Docs
          </Link>

          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>

          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>

          <Link href="/github" className="hover:text-white transition">
            GitHub
          </Link>

          <Link
            href="/docs"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#090f20] px-6 py-6 space-y-4">

          <Link href="/docs" className="block">Docs</Link>
          <Link href="/blog" className="block">Blog</Link>
          <Link href="/pricing" className="block">Pricing</Link>
          <Link href="/github" className="block">GitHub</Link>

        </div>
      )}

    </header>
  );
}