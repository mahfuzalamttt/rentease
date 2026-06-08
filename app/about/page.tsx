import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-blue-50">

      <Navbar />

      <section className="px-6 py-12">

        <div className="mx-auto max-w-6xl">

          {/* Hero Section */}
          <div className="text-center">

            <h1 className="text-5xl font-bold text-slate-900">
              About RentEase
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Making furniture and appliance rentals simple,
              affordable, and hassle-free for students,
              working professionals, and families.
            </p>

          </div>

          {/* Mission Section */}
          <div className="mt-16 rounded-3xl bg-white p-8 shadow-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Our Mission
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              At RentEase, our mission is to provide
              affordable and convenient rental solutions
              for modern living. Whether you are a student,
              a working professional, or a family moving
              to a new city, we help you access quality
              furniture and appliances without the burden
              of ownership.
            </p>

          </div>

          {/* Why Choose Us */}
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose RentEase?
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="rounded-2xl bg-slate-100 p-4">
                ✅ Affordable Monthly Plans
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                ✅ Premium Quality Products
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                ✅ Free Delivery & Setup
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                ✅ Flexible Rental Periods
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                ✅ Easy Return Process
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                ✅ Reliable Customer Support
              </div>

            </div>

          </div>

          {/* Categories */}
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Categories We Offer
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-slate-100 p-6 text-center">
                🛋️
                <h3 className="mt-3 font-semibold">
                  Furniture
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-6 text-center">
                📺
                <h3 className="mt-3 font-semibold">
                  Electronics
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-6 text-center">
                ❄️
                <h3 className="mt-3 font-semibold">
                  Appliances
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-6 text-center">
                🪑
                <h3 className="mt-3 font-semibold">
                  Study Essentials
                </h3>
              </div>

            </div>

          </div>

          {/* Contact */}
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Contact Us
            </h2>

            <div className="mt-6 space-y-3 text-slate-600">

              <p>
                📧 support@rentease.com
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                📍 India
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}