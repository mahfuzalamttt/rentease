import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-blue-50">

      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-12">

        <h1 className="text-center text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-center text-slate-600">
          We'd love to hear from you.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-3xl font-bold">
              Send a Message
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border p-2"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-2"
              />

              <textarea
                rows={3}
                placeholder="Your Message"
                className="w-full rounded-xl border p-2"
              />

              <button className="w-full rounded-xl bg-cyan-600 py-4 text-white">
                Send Message
              </button>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-3xl font-bold">
              Get in Touch
            </h2>

            <div className="space-y-6 text-lg">

              <p>📧 support@rentease.com</p>

              <p>📞 +91 98765 43210</p>

              <p>📍 India</p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}