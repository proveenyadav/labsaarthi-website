import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-teal-600 font-semibold tracking-wider">
          WHO WE ARE
        </p>

        <h2 className="text-5xl font-bold mt-4 max-w-2xl">
          Built where diagnostics meets intelligence.
        </h2>

        <div className="grid lg:grid-cols-4 gap-10 mt-16">

          <div className="lg:col-span-1">
            <Image
              src="/building.png"
              alt="Building"
              width={500}
              height={600}
              className="rounded-3xl"
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-4">
              What is LabSaarthi
            </h3>

            <p className="text-slate-600 leading-8">
              LabSaarthi is a next-generation healthcare operations platform
              connecting laboratory systems, clinical workflows and AI-enabled infrastructure.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-4">
              The Problem We Solve
            </h3>

            <p className="text-slate-600 leading-8">
              Fragmented healthcare systems create delays,
              manual processes and disconnected reporting.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-4">
              Why It Matters
            </h3>

            <p className="text-slate-600 leading-8">
              LabSaarthi helps hospitals, laboratories and
              healthcare centres operate through one platform.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}