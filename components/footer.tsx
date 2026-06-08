import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-blue-100 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        <div>
          <h2 className="text-3xl font-bold text-cyan-600">
            RentEase
          </h2>

          <p className="mt-4 text-slate-600">
            Rent furniture and appliances with ease.
            Affordable, flexible, and hassle-free rentals
            for students, professionals, and families.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/products">Products</Link>
            </li>

            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>

            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Support
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600">

            <li>
              <Link href="/about">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/auth">
                Login / Register
              </Link>
            </li>

            <li>
              FAQ
            </li>

          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Contact
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>support@rentease.com</li>
            <li>+91 98765 43210</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      <div className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © 2026 RentEase. Made with ❤️ for modern rental living.
      </div>
    </footer>
  );
}