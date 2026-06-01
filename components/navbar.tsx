"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
  const savedWishlist = localStorage.getItem("wishlist");

  if (savedWishlist) {
    const wishlist = JSON.parse(savedWishlist);
    setWishlistCount(wishlist.length);
  }
  }, []);

  useEffect(() => {
  const updateWishlistCount = () => {
    const savedWishlist =
      localStorage.getItem("wishlist");

    if (savedWishlist) {
      const wishlist = JSON.parse(savedWishlist);
      setWishlistCount(wishlist.length);
    } else {
      setWishlistCount(0);
    }
  };

  window.addEventListener(
    "wishlistUpdated",
    updateWishlistCount
  );

  return () => {
    window.removeEventListener(
      "wishlistUpdated",
      updateWishlistCount
    );
  };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold tracking-tight text-indigo-600">
          RentEase
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">

          <li className="cursor-pointer transition hover:text-indigo-600">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-indigo-600">
            Furniture
          </li>

          <li className="cursor-pointer transition hover:text-indigo-600">
            Appliances
          </li>

          <Link href="/wishlist">
            Wishlist ({wishlistCount})
          </Link>

          <li className="cursor-pointer transition hover:text-indigo-600">
            About
          </li>

        </ul>

        {/* Desktop Button */}
        <button className="hidden rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 md:block">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">

          <ul className="space-y-6 text-lg font-medium text-slate-700">

            <li>Home</li>
            <li>Furniture</li>
            <li>Appliances</li>
            <li>About</li>

            <button className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Login
            </button>

          </ul>

        </div>
      )}

    </header>
  );
}