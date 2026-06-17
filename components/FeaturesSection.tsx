const features = [
  {
    title: "AI-Enabled Lab Reporting",
    description:
      "Rule-based validation engines auto-approve routine reports. Smart report templates adapt to hospital branding and deliver results directly to patients via WhatsApp and SMS.",
  },
  {
    title: "Real-Time Sample Visibility",
    description:
      "Track every sample across its journey from collection through transportation to reporting. Tray-based logistics and barcode-driven workflows ensure complete visibility.",
  },
  {
    title: "Built for Bharat's Scale",
    description:
      "Multi-tenant architecture supports hundreds of facilities on a single platform. Works at AIIMS-level complexity and community healthcare scale alike.",
  },
  {
    title: "Enterprise Security & Compliance",
    description:
      "ABDM-compliant platform with ISO-certified quality processes, role-based access control, audit trails and enterprise-grade security.",
  },
  {
    title: "Clinically Adaptable Systems",
    description:
      "Designed with real laboratory workflows in mind. Supports pathologists, technicians, radiologists and administrators with configurable workflows.",
  },
  {
    title: "Connected Ecosystem Intelligence",
    description:
      "Integrates analyzers, radiology systems, hospital ERPs and government portals into one coordinated healthcare ecosystem.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-teal-600 font-semibold tracking-[0.2em] uppercase">
            Why LabSaarthi
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Infrastructure that thinks.
            <br />
            Workflows that work.
          </h2>

          <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto">
            From sample registration to report delivery —
            every step automated, accountable and scalable.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-8
                hover:shadow-xl
                transition
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-teal-600 rounded-full"></div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-8">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}