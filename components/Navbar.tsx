import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
  <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        <Link href="/">
            <Image
                src="/labsaarthi-logo.png"
                alt="LabSaarthi"
                width={180}
                height={50}
                priority
            />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">

  <Link href="/" className="hover:text-teal-600 transition">
    Home
  </Link>

  <Link href="/about" className="hover:text-teal-600 transition">
    About
  </Link>

  <Link href="/leadership" className="hover:text-teal-600 transition">
    Leadership
  </Link>

  <Link href="/platform" className="hover:text-teal-600 transition">
    Platform
  </Link>

</nav>

        <Link
          href="/demo"
          className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-xl font-semibold"
        >
          Request Demo
        </Link>

      </div>
    </header>
  );
}

