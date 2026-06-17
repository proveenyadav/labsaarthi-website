import Layout from "@/components/Layout";
import Image from "next/image";
import {
  FileText,
  TriangleAlert,
  Users,
  ClipboardList,
  Database,
  TestTube,
  ShieldCheck,
  Stethoscope,
  Network,
  Clock3,
  Target,
  Eye,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "What is LabSaarthi",
    text: "LabSaarthi is a next-generation healthcare operations platform that connects laboratory systems, clinical workflows and AI-enabled infrastructure into a single coherent experience.",
    icon: "📄",
  },
  {
    title: "The Problem We Solve",
    text: "India's healthcare system manages millions of patients through fragmented workflows, disconnected systems and manual reporting cycles. LabSaarthi digitizes and automates every step.",
    icon: "⚠️",
  },
  {
    title: "Why It Matters",
    text: "With deployments across AIIMS institutions, district hospitals and community health centres, LabSaarthi is helping transform healthcare delivery across India.",
    icon: "👥",
  },


];

const stats = [
  {
    value: "5 Cr+",
    title: "Lab Reports Delivered",
    desc: "Accurate, timely and trusted reports delivered nationwide.",
  },
  {
    value: "1,200+",
    title: "Active Deployments",
    desc: "Across hospitals, labs and healthcare systems.",
  },
  {
    value: "15 Cr+",
    title: "Samples Processed",
    desc: "Processed with precision and intelligence.",
  },
  {
    value: "4+ States",
    title: "Live Operations",
    desc: "Expanding healthcare infrastructure.",
  },
];

const aboutFeatures = [
  {
    title: "What is LabSaarthi",
    text: "LabSaarthi is a next-generation healthcare operations platform that connects laboratory systems, clinical workflows, and AI-enabled infrastructure into a single coherent experience.",
    icon: FileText,
  },
  {
    title: "The Problem We Solve",
    text: "India's healthcare system manages millions of patients through fragmented workflows, disconnected systems, and manual reporting cycles. LabSaarthi digitizes and automates every step.",
    icon: TriangleAlert,
  },
  {
    title: "Why It Matters",
    text: "With deployments across AIIMS institutions, district hospitals, and community health centres, LabSaarthi is helping transform healthcare delivery across India.",
    icon: Users,
  },
];

const whyFeatures = [
  {
    no: "01",
    icon: FileText,
    title: "AI-Enabled Lab Reporting",
    desc: "Rule-based validation engines auto-approve routine reports. Smart templates adapt to hospital branding and results are delivered directly to patients via WhatsApp and SMS.",
  },
  {
    no: "02",
    icon: TestTube,
    title: "Real-Time Sample Visibility",
    desc: "Track every sample across its entire journey from collection through transport to final reporting.",
  },
  {
    no: "03",
    icon: Database,
    title: "Built for Bharat's Scale",
    desc: "Multi-tenant architecture supports hundreds of facilities on a single platform.",
  },
  {
    no: "04",
    icon: ShieldCheck,
    title: "Enterprise Security & Compliance",
    desc: "ABDM-compliant, ISO 9001:2015 and ISO 13485:2016 certified.",
  },
  {
    no: "05",
    icon: Stethoscope,
    title: "Clinically Adaptable Systems",
    desc: "Designed with real healthcare workflows in mind.",
  },
  {
    no: "06",
    icon: Network,
    title: "Connected Ecosystem Intelligence",
    desc: "Integrates analyzers, PACS/RIS, hospital ERPs and government portals.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="pt-40 pb-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}

            <div>

              <p className="text-teal-600 font-semibold tracking-[0.2em] uppercase">
                Who We Are
              </p>

              <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Built where
                <br />
                diagnostics
                <br />
                meets intelligence.
              </h1>

              <div className="mt-12 space-y-12">

                {aboutFeatures.map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.title}
      className="flex gap-6"
    >
      <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
        <Icon
          size={26}
          className="text-teal-600"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-4 text-slate-600 leading-8">
          {item.text}
        </p>
      </div>
    </div>
  );
})}

              </div>

            </div>

            {/* Right */}

            <div className="sticky top-32">

              <div className="overflow-hidden rounded-[40px]">

                <Image
  src="/building.png"
  alt="LabSaarthi Building"
  width={900}
  height={1200}
  className="w-full rounded-[40px] object-cover"
/>

              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="mt-24 border rounded-[32px] bg-white overflow-hidden">

            <div className="grid md:grid-cols-2 lg:grid-cols-4">

              {stats.map((item) => (
                <div
                  key={item.title}
                  className="p-10 border-r last:border-r-0"
                >
                  <h3 className="text-4xl lg:text-5xl font-bold text-teal-600">
                    {item.value}
                  </h3>

                  <p className="font-semibold mt-3 text-lg">
                    {item.title}
                  </p>

                  <p className="text-slate-500 mt-4 leading-7">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
      <section className="py-24 bg-[#eef5f7]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <p className="text-teal-600 uppercase tracking-[0.2em] font-semibold">
        Why LabSaarthi
      </p>

      <h2 className="text-6xl font-bold mt-6 leading-tight text-slate-900">
        Infrastructure that <span className="text-teal-600">thinks.</span>
        <br />
        Workflows that <span className="text-teal-600">work.</span>
      </h2>

      <p className="mt-6 text-slate-600 text-xl">
        From sample registration to report delivery —
        every step automated and accountable.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {whyFeatures.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.no}
            className="bg-white rounded-[32px] p-10 border border-slate-200"
          >

            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold">
              {item.no}
            </div>

            <Icon
              size={34}
              className="text-teal-600 mt-8"
            />

            <h3 className="text-2xl font-bold mt-6 text-slate-900">
              {item.title}
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              {item.desc}
            </p>

          </div>
        );
      })}
    </div>

  </div>
</section>
<section className="pb-24 bg-[#eef5f7]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="bg-white rounded-[30px] border p-10">

      <div className="grid md:grid-cols-4 gap-10">

        <div className="flex gap-4">
          <Clock3 className="text-teal-600" />
          <div>
            <h4 className="font-bold">
              Faster TAT
            </h4>
            <p className="text-slate-500">
              Reduce turnaround time at every step.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Target className="text-teal-600" />
          <div>
            <h4 className="font-bold">
              Higher Accuracy
            </h4>
            <p className="text-slate-500">
              AI + automation for error-free reporting.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Eye className="text-teal-600" />
          <div>
            <h4 className="font-bold">
              Complete Visibility
            </h4>
            <p className="text-slate-500">
              End-to-end tracking across your network.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <BarChart3 className="text-teal-600" />
          <div>
            <h4 className="font-bold">
              Better Outcomes
            </h4>
            <p className="text-slate-500">
              Data-driven decisions for better patient care.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>
    </Layout>
  );
}
