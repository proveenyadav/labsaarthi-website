"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "/FadeUp";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-teal-200 bg-white text-teal-700 text-sm font-medium">
              Powered by IQ-Line
            </div>

            <h1 className="mt-8 text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
              The <span className="text-teal-600">Operating System</span>
              <br />
              for Bharat's Labs.
            </h1>

            <p className="mt-8 text-xl text-slate-600 max-w-xl">
              LabSaarthi powered by IQ-Line connects diagnostics,
              clinical workflows and AI-enabled reporting into a
              single scalable platform purpose-built for hospitals,
              labs and healthcare networks across India.
            </p>

            <div className="flex gap-4 mt-10">
              <Link
                href="/demo"
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-medium"
              >
                Request Demo
              </Link>

              <Link
                href="/platform"
                className="border border-slate-300 px-8 py-4 rounded-xl font-medium"
              >
                Explore Platform
              </Link>
            </div>

            <div className="mt-12 border-t pt-8">
              <p className="text-sm text-slate-500 mb-4">
                Trusted by leading institutions across India
              </p>

              <div className="flex flex-wrap gap-8 text-slate-700 font-semibold">
                <span>AIIMS</span>
                <span>Government of India</span>
                <span>NHSRC</span>
                <span>Digital India</span>
              </div>
            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <motion.div
  className="relative"
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>

  <Image
    src="/platform-dashboard.png"
    alt="LabSaarthi Dashboard"
    width={1200}
    height={900}
    className="
w-full
transition-all
duration-700
hover:scale-[1.02]
drop-shadow-[0_30px_80px_rgba(0,0,0,0.18)]
"
  />

</motion.div>

            <div className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-2xl p-4 border">
              <p className="text-sm font-semibold">
                Report Delivered
              </p>

              <p className="text-teal-600 text-sm">
                via WhatsApp ✓
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
