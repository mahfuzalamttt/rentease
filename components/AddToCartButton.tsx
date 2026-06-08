"use client";

import { useEffect, useState } from "react";

export default function AddToCartButton({
  productId,
}: {
  productId: number;
}) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      const cart = JSON.parse(savedCart);

      setIsAdded(cart.includes(productId));
    }
  }, [productId]);

  const handleCart = () => {
  const savedCart = localStorage.getItem("cart");

  let cart: number[] = savedCart
    ? JSON.parse(savedCart)
    : [];

  if (cart.includes(productId)) {
    cart = cart.filter(
      (id) => id !== productId
    );

    setIsAdded(false);
  } else {
    cart.push(productId);

    setIsAdded(true);
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  window.dispatchEvent(
    new Event("cartUpdated")
  );
};

  return (
    <button
      onClick={handleCart}
      className={`rounded-xl px-8 py-4 text-white transition ${
        isAdded
          ? "bg-green-600"
          : "bg-cyan-600 hover:bg-cyan-700"
      }`}
    >
      {isAdded
        ? "✅ Added to Cart"
        : "🛒 Add to Cart"}
    </button>
  );
}