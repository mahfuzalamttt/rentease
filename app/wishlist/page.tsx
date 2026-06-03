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
  const [cartIds, setCartIds] = useState<number[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedWishlist) {
      setWishlistIds(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    setCartIds(JSON.parse(savedCart));
  }
  }, []);

  const wishlistProducts = products.filter((product) =>
    wishlistIds.includes(product.id)
  );

  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="mb-10 text-5xl font-bold text-slate-900">
          My Wishlist ❤️
        </h1>

        {wishlistProducts.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-md">

            <h2 className="text-3xl font-bold">
              Your Wishlist is Empty 💔
            </h2>

            <p className="mt-3 text-slate-500">
              Add products from the products page.
            </p>

          </div>
        ) : (
          <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-md">

        <div className="grid grid-cols-4 border-b bg-slate-50 px-8 py-5 font-semibold   text-slate-700">

          <div>Product</div>
          <div>Monthly Rent</div>
          <div>Cart</div>
          <div className="text-right">Action</div>

        </div>

        {wishlistProducts.map((product) => (

        <div
            key={product.id}
            className="grid grid-cols-4 items-center border-b px-8 py-6"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-3xl">
                {product.image}
              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  {product.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {product.category}
                </p>

              </div>

            </div>

            <div className="font-semibold text-indigo-600">
              {product.price}
            </div>

            <div>

              <button
                onClick={() => {
                  let updatedCart;

                  if (cartIds.includes(product.id)) {
                    updatedCart = cartIds.filter(
                      (id) => id !== product.id
                    );
                  } else {
                    updatedCart = [
                      ...cartIds,
                      product.id,
                    ];
                  }

                  setCartIds(updatedCart);

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(updatedCart)
                  );

                  window.dispatchEvent(
                    new Event("cartUpdated")
                  );
                }}
                className={`rounded-xl px-4 py-2 transition ${
                  cartIds.includes(product.id)
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-200 hover:bg-slate-300"
                }`}
              >
                {cartIds.includes(product.id)
                  ? "✅ Added"
                  : "🛒 Add"}
              </button>

            </div>

            <div className="text-right">

              <button
                onClick={() => {
                  const updatedWishlist =
                    wishlistIds.filter(
                      (id) => id !== product.id
                    );

                  setWishlistIds(updatedWishlist);

                  localStorage.setItem(
                    "wishlist",
                    JSON.stringify(updatedWishlist)
                  );

                  window.dispatchEvent(
                    new Event("wishlistUpdated")
                  );
                }}
                className="rounded-xl bg-red-100 px-4 py-2 text-red-600 transition hover:bg-red-200"
              >
                Remove
              </button>

            </div>

          </div>

        ))}

        </div>
        )}

      </section>

    </main>
  );
}