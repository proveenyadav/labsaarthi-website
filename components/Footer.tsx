import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          <div>
              <Link href="/">
            <Image
                src="/labsaarthi-logo.png"
                alt="LabSaarthi"
                width={180}
                height={50}
                priority
            />
        </Link>

            <p className="mt-6 text-slate-400 leading-7">
              Intelligent infrastructure for Bharat's
              healthcare ecosystem.
            </p>

          </div>

          <div>

            <h4 className="font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link href="/leadership">
                  Leadership
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-6">
              Platform
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>LIMS</li>
              <li>STS</li>
              <li>AI Reporting</li>
              <li>HIMS</li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-3 text-slate-400">

              <p>
                info@iqline.co.in
              </p>

              <p>
                +91 8384020035
              </p>

              <p>
                Sector 142, Noida
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8">

          <div className="flex flex-wrap gap-4">

            <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
              ABDM Compliant
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
              ISO 9001:2015
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
              ISO 13485:2016
            </span>

          </div>

          <p className="text-slate-500 text-sm mt-8">
            © 2026 LabSaarthi. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}