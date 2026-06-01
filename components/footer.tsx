export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        <div>
          <h2 className="text-3xl font-bold text-indigo-600">
            RentEase
          </h2>

          <p className="mt-4 text-slate-600">
            Affordable furniture and appliance rentals for modern urban living.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>Home</li>
            <li>Furniture</li>
            <li>Appliances</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Support
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>Help Center</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Contact
          </h3>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>support@rentease.com</li>
            <li>+91 98765 43210</li>
            <li>Ballia, India</li>
          </ul>
        </div>

      </div>

      <div className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © 2026 RentEase. All rights reserved.
      </div>
    </footer>
  );
}