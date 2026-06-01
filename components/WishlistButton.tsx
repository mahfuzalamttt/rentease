"use client";

import { useEffect, useState } from "react";

export default function WishlistButton({
  productId,
}: {
  productId: number;
}) {
  const [isWishlisted, setIsWishlisted] =
    useState(false);

  useEffect(() => {
    const savedWishlist =
      localStorage.getItem("wishlist");

    if (savedWishlist) {
      const wishlist = JSON.parse(savedWishlist);

      setIsWishlisted(
        wishlist.includes(productId)
      );
    }
  }, [productId]);

  const toggleWishlist = () => {
    const savedWishlist =
      localStorage.getItem("wishlist");

    const wishlist = savedWishlist
      ? JSON.parse(savedWishlist)
      : [];

    let updatedWishlist;

    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter(
        (id: number) => id !== productId
      );
    } else {
      updatedWishlist = [
        ...wishlist,
        productId,
      ];
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setIsWishlisted(
      updatedWishlist.includes(productId)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`rounded-xl px-8 py-4 transition ${
        isWishlisted
          ? "bg-red-100 text-red-600 border border-red-300"
          : "border border-slate-300 bg-white hover:bg-slate-100"
      }`}
    >
      {isWishlisted
        ? "❤️ Added to Wishlist"
        : "🤍 Add to Wishlist"}
    </button>
  );
}