import Layout from "@/components/Layout";
import DemoCTA from "@/components/DemoCTA";
import Image from "next/image";

const leaders = [
  {
    image: "/ayush.jpg",
    name: "Ayush Garg",
    role: "Director & Co-founder, IQ-Line / Q-Line Innovations",
    institute: "University of Sydney",
    tags: ["Product", "MedTech", "Adoption"],
  },

  {
    image: "/amit.jpg",
    name: "Amit Jain",
    role: "Co-founder & CEO",
    institute: "NIT • IIT • IIM",
    tags: ["Growth", "Enterprise SaaS", "Strategy"],
  },

  {
    image: "",
    name: "Meenal Gupta",
    role: "Group CFO, POCT Group",
    institute: "CA • 20+ Years",
    tags: ["Finance", "Governance", "Scale"],
  },

  {
    image: "",
    name: "Abhishek Maya Khare",
    role: "Chief Human Resources Officer (CHRO)",
    institute: "People & Culture",
    tags: ["Talent", "Culture", "Execution"],
  },
];

const expertise = [
  "Healthcare IT",
  "AI / ML",
  "Cloud Architecture",
  "Data Engineering",
  "Enterprise SaaS",
  "Cybersecurity",
  "Product Strategy",
  "MERN Stack",
];

export default function LeadershipPage() {
  return (
    <Layout>

      {/* HERO */}

      <section className="pt-40 pb-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-teal-600 font-semibold tracking-[0.25em] uppercase">
            Leadership
          </p>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
            The people building Bharat's
            <br />
            <span className="text-teal-600">
              health-tech backbone.
            </span>
          </h1>

          <p className="mt-10 max-w-4xl mx-auto text-xl text-slate-600 leading-10">
            Our team brings together the institutional rigor of
            India's premier engineering and management institutions
            with the ground-level urgency of someone who has seen
            healthcare fail and decided to fix it.
          </p>

        </div>

      </section>

      {/* LEADERS */}

      <section className="pb-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {leaders.map((person) => (

              <div
                key={person.name}
                className="
                  bg-white
                  rounded-[28px]
                  border
                  border-slate-200
                  p-8
                  text-center
                  hover:shadow-xl
                  transition
                "
              >

                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-slate-100">

                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100" />
                  )}

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {person.name}
                </h3>

                <p className="mt-2 text-slate-600 text-sm leading-6">
                  {person.role}
                </p>

                <p className="mt-4 text-teal-600 font-semibold">
                  {person.institute}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-8">

                  {person.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        text-sm
                        text-slate-700
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* EXPERTISE */}

      <section className="pb-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-[28px] border border-slate-200 p-10">

            <h3 className="text-center text-3xl font-bold text-slate-900">
              Collective Expertise
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              {expertise.map((item) => (

                <span
                  key={item}
                  className="
                    px-5
                    py-3
                    rounded-full
                    bg-slate-100
                    text-slate-700
                    text-sm
                    font-medium
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* DEMO */}

      <DemoCTA />

    </Layout>
  );
}