export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-teal-600 font-semibold mb-4">
          WHO WE ARE
        </p>

        <h2 className="text-5xl font-bold text-slate-900 max-w-3xl">
          Built where diagnostics
          meets intelligence.
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          <div>
            <p className="text-slate-600 leading-8">
              LabSaarthi is a next-generation healthcare
              operations platform connecting laboratory
              systems, clinical workflows and AI-enabled
              infrastructure into a single coherent experience.
            </p>
          </div>

          <div>
            <p className="text-slate-600 leading-8">
              With deployments across AIIMS institutions,
              district hospitals and community health centres,
              LabSaarthi is already part of how Bharat delivers care.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}