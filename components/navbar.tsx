"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
  const savedWishlist = localStorage.getItem("wishlist");

  if (savedWishlist) {
    const wishlist = JSON.parse(savedWishlist);
    setWishlistCount(wishlist.length);
  }
  }, []);

  useEffect(() => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    const cart = JSON.parse(savedCart);
    setCartCount(cart.length);
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

  useEffect(() => {
  const updateCartCount = () => {
    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      const cart = JSON.parse(savedCart);
      setCartCount(cart.length);
    } else {
      setCartCount(0);
    }
  };

  window.addEventListener(
    "cartUpdated",
    updateCartCount
  );

  return () => {
    window.removeEventListener(
      "cartUpdated",
      updateCartCount
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

          <Link href="/" className="transition hover:text-indigo-600">
            Home
          </Link>

          <Link href="/products" className="transition hover:text-indigo-600">
            Products
          </Link>

          <Link href="/wishlist" className="transition hover:text-indigo-600">
            Wishlist ({wishlistCount})
          </Link>

          <Link href="/cart" className="transition hover:text-indigo-600">
            Cart ({cartCount})
          </Link>

          <Link href="/about" className="transition hover:text-indigo-600">
            About
          </Link>

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

            <li>
              <Link href="/" className="transition hover:text-indigo-600">
                Home
              </Link>
            </li>

            <li>
              <Link href="/products" className="transition hover:text-indigo-600">
            Products
          </Link>
            </li>

            <li>
              <Link href="/wishlist" className="transition hover:text-indigo-600">
                Wishlist ({wishlistCount})
              </Link>
            </li>

            <li>
              <Link href="/cart" className="transition hover:text-indigo-600">
                Cart ({cartCount})
              </Link>
            </li>

            <li>
              <Link href="/about" className="transition hover:text-indigo-600">
                About
              </Link>
            </li>

            <button className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Login
            </button>

          </ul>

        </div>
      )}

    </header>
  );
}