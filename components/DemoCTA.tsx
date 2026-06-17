export default function DemoCTA() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            rounded-[40px]
            bg-gradient-to-br
            from-slate-950
            via-slate-900
            to-teal-950
            overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 p-12 lg:p-20 items-center">

            {/* Left Side */}

            <div className="text-white">

              <span
                className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  text-sm
                "
              >
                Book a Demo
              </span>

              <h2 className="mt-8 text-5xl font-bold leading-tight">
                See LabSaarthi
                <br />
                in Action.
              </h2>

              <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
                Whether you manage a district hospital,
                diagnostic centre or healthcare network,
                we'll show exactly how LabSaarthi fits
                into your workflow.
              </p>

              <div className="mt-12 space-y-6">

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Personalized Walkthrough
                    </h4>

                    <p className="text-slate-400 text-sm">
                      Tailored to your organization.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Platform Demonstration
                    </h4>

                    <p className="text-slate-400 text-sm">
                      LIMS, HIMS, STS and AI Reporting.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Implementation Guidance
                    </h4>

                    <p className="text-slate-400 text-sm">
                      Get answers from our experts.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div>

              <div className="bg-white rounded-3xl p-8">

                <h3 className="text-2xl font-bold">
                  Request a Demo
                </h3>

                <p className="text-slate-500 mt-2">
                  Our team typically responds within one business day.
                </p>

                <form className="space-y-4 mt-8">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-slate-300 rounded-xl p-4"
                  />

                  <input
                    type="text"
                    placeholder="Organization Name"
                    className="w-full border border-slate-300 rounded-xl p-4"
                  />

                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full border border-slate-300 rounded-xl p-4"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-slate-300 rounded-xl p-4"
                  />

                  <select
                    className="w-full border border-slate-300 rounded-xl p-4"
                  >
                    <option>
                      Type of Organization
                    </option>

                    <option>
                      Government Hospital
                    </option>

                    <option>
                      Private Hospital
                    </option>

                    <option>
                      Medical College
                    </option>

                    <option>
                      Diagnostic Lab
                    </option>
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your current setup..."
                    className="w-full border border-slate-300 rounded-xl p-4"
                  />

                  <button
                    type="submit"
                    className="
                      w-full
                      bg-teal-600
                      hover:bg-teal-700
                      transition
                      text-white
                      font-semibold
                      rounded-xl
                      p-4
                    "
                  >
                    Request Demo
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}