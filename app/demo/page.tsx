import Layout from "@/components/Layout";

export default function DemoPage() {
  return (
    <Layout>
      <section className="pt-40 pb-24">

        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            Request a Demo
          </h1>

          <p className="text-center text-slate-600 mt-4">
            Tell us about your organization and we'll
            schedule a personalized walkthrough.
          </p>

          <form className="mt-12 space-y-6 bg-white shadow-xl rounded-3xl p-10">

            <input
              placeholder="Full Name"
              className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              placeholder="Organization Name"
              className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              placeholder="Email"
              className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              placeholder="Phone Number"
              className="w-full border border-slate-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border p-4 rounded-xl"
            />

            <button
              className="w-full bg-teal-600 hover:bg-teal-700 transition text-white p-4 rounded-xl font-semibold"
            >
              Request Demo
            </button>

          </form>

        </div>

      </section>
    </Layout>
  );
}