"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Furniture",
    price: "₹1499/month",
    image: "🛋️",
  },
  {
    id: 2,
    name: "Double Bed",
    category: "Furniture",
    price: "₹1199/month",
    image: "🛏️",
  },
  {
    id: 3,
    name: "Smart TV",
    category: "Appliance",
    price: "₹999/month",
    image: "📺",
  },
  {
    id: 4,
    name: "Refrigerator",
    category: "Appliance",
    price: "₹1299/month",
    image: "❄️",
  },
  {
    id: 5,
    name: "Washing Machine",
    category: "Appliance",
    price: "₹899/month",
    image: "🧺",
  },
  {
    id: 6,
    name: "Study Table",
    category: "Furniture",
    price: "₹699/month",
    image: "🪑",
  },
];

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedWishlist) {
      setWishlistIds(JSON.parse(savedWishlist));
    }
  }, []);

  const wishlistProducts = products.filter((product) =>
    wishlistIds.includes(product.id)
  );

  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          My Wishlist ❤️
        </h1>

        {wishlistProducts.length === 0 ? (
          <div className="mt-20 text-center">

            <h2 className="text-3xl font-bold">
              Your Wishlist is Empty 💔
            </h2>

            <p className="mt-3 text-slate-500">
              Add products from the products page.
            </p>

          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border bg-white p-6 shadow-md"
              >

                <div className="flex h-40 items-center justify-center rounded-2xl bg-slate-100 text-7xl">
                  {product.image}
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  {product.name}
                </h2>

                <p className="mt-2 text-indigo-600">
                  {product.price}
                </p>

              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}