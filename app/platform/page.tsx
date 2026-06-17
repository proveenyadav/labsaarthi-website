import Layout from "@/components/Layout";
import DemoCTA from "@/components/DemoCTA";
import Image from "next/image";
import {
  FlaskConical,
  Truck,
  Cpu,
  Monitor,
  Building2,
  Briefcase,
  ShieldCheck,
  Cloud,
  Network,
  Headphones,
} from "lucide-react";

const modules = [
  {
    title: "LIMS",
    subtitle: "Laboratory Information Management System",
    icon: FlaskConical,
    points: [
      "Sample registration & barcode tracking",
      "Test management & workflow automation",
      "Quality control & analyzer integration",
    ],
  },

  {
    title: "STS",
    subtitle: "Sample Transport System",
    icon: Truck,
    points: [
      "Tray & bag level tracking",
      "Rider handover & OTP verification",
      "Route optimization & ETA updates",
    ],
  },

  {
    title: "AI Reporting",
    subtitle: "Intelligent Reporting",
    icon: Cpu,
    points: [
      "Rule-based validation engine",
      "Auto approval of routine reports",
      "Smart templates & branding",
    ],
  },

  {
    title: "Machine Integration",
    subtitle: "Seamless Device Connectivity",
    icon: Monitor,
    points: [
      "Bi-directional data sync",
      "Error reduction & accuracy",
      "Supports 1000+ devices",
    ],
  },

  {
    title: "HIMS",
    subtitle: "Hospital Information Management System",
    icon: Building2,
    points: [
      "OPD, IPD & billing integration",
      "Doctor & department management",
      "EMR & clinical documentation",
    ],
  },

  {
    title: "ERP",
    subtitle: "Enterprise Resource Planning",
    icon: Briefcase,
    points: [
      "Finance & accounting",
      "HR & payroll management",
      "Inventory & procurement",
    ],
  },
];

export default function PlatformPage() {
  return (
    <Layout>

      {/* HERO */}

      <section className="pt-40 pb-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-teal-600 uppercase tracking-[0.2em] font-semibold">
                Our Capabilities
              </p>

              <h1 className="mt-6 text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
                One platform.
                <br />
                Complete
                <br />
                diagnostic
                <br />
                <span className="text-teal-600">
                  ecosystem.
                </span>
              </h1>

              <p className="mt-8 text-xl text-slate-600 leading-10 max-w-xl">
                LabSaarthi brings together every critical function
                of a modern diagnostic network into a unified,
                intelligent platform built for scale, security
                and real-world impact.
              </p>

            </div>

            <div>

              <Image
                src="/platform-dashboard.png"
                alt="LabSaarthi Dashboard"
                width={1200}
                height={900}
                className="w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* MODULES */}

      <section className="pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            {modules.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    bg-white
                    border
                    rounded-[32px]
                    p-8
                    hover:shadow-xl
                    transition
                  "
                >

                  <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center">

                    <Icon
                      className="text-teal-600"
                      size={28}
                    />

                  </div>

                  <h3 className="text-3xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-4 mt-8">

                    {item.points.map((point) => (

                      <li
                        key={point}
                        className="flex gap-3 text-slate-700"
                      >
                        <span className="text-teal-600">
                          ✓
                        </span>

                        {point}
                      </li>

                    ))}

                  </ul>

                  <button className="mt-8 text-teal-600 font-semibold">
                    Learn More →
                  </button>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="border rounded-[32px] p-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="flex gap-4">
                <ShieldCheck className="text-teal-600" />
                <div>
                  <h4 className="font-bold">
                    Secure & Compliant
                  </h4>
                  <p className="text-slate-500">
                    ABDM compliant, ISO certified and RBAC enabled.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Cloud className="text-teal-600" />
                <div>
                  <h4 className="font-bold">
                    Scalable for Bharat
                  </h4>
                  <p className="text-slate-500">
                    From AIIMS to PHC — one platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Network className="text-teal-600" />
                <div>
                  <h4 className="font-bold">
                    Interoperable
                  </h4>
                  <p className="text-slate-500">
                    PACS, RIS, analyzers & ERP integrations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Headphones className="text-teal-600" />
                <div>
                  <h4 className="font-bold">
                    Always Supported
                  </h4>
                  <p className="text-slate-500">
                    24×7 support and continuous innovation.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <DemoCTA />

    </Layout>
  );
}