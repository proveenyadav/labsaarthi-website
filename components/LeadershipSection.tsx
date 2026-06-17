const leaders = [
  {
    name: "Suraj Kumar",
    role: "Co-Founder & CEO",
    institute: "IIT Kharagpur",
    tag: "IIT",
  },
  {
    name: "Manoj Kumar Verma",
    role: "Co-Founder & CTO",
    institute: "IIT Kharagpur",
    tag: "IIT",
  },
  {
    name: "Sanjeet Kumar",
    role: "Co-Founder & COO",
    institute: "IIT Kharagpur",
    tag: "IIT",
  },
  {
    name: "Sandeep Kumar",
    role: "Co-Founder & CAO",
    institute: "IIM Calcutta",
    tag: "IIM",
  },
  {
    name: "Vipin Kumar",
    role: "Co-Founder & CBO",
    institute: "IIM Calcutta",
    tag: "IIM",
  },
  {
    name: "Ujjwal Kumar Jha",
    role: "Co-Founder & VP Engineering",
    institute: "IIT (BHU) Varanasi",
    tag: "IIT",
  },
];

const expertise = [
  "Collective Expertise",
  "Healthcare IT",
  "AI / ML",
  "Cloud Architecture",
  "Data Engineering",
  "Enterprise SaaS",
  "Cybersecurity",
  "Product Strategy",
  "MERN Stack",
];

export default function LeadershipPreview() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-teal-600 font-semibold tracking-[0.2em] uppercase">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
            The people building Bharat's
            <br />
            health-tech backbone.
          </h2>

          <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto">
            Our team brings together institutional rigor from
            India's premier engineering and management institutions
            with deep domain expertise in healthcare, AI and
            large-scale systems.
          </p>

        </div>

        {/* Leadership Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">

          {leaders.map((person) => (
            <div
              key={person.name}
              className="text-center"
            >

              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-slate-100
                  border
                  mx-auto
                  flex
                  items-center
                  justify-center
                  text-4xl
                "
              >
                👤
              </div>

              <h3 className="font-bold text-lg mt-5">
                {person.name}
              </h3>

              <p className="text-slate-700 text-sm mt-1">
                {person.role}
              </p>

              <p className="text-slate-500 text-sm mt-2">
                {person.institute}
              </p>

              <span
                className="
                  inline-block
                  mt-3
                  px-3
                  py-1
                  rounded-full
                  bg-blue-600
                  text-white
                  text-xs
                  font-semibold
                "
              >
                {person.tag}
              </span>

            </div>
          ))}

        </div>

        {/* Expertise */}

        <div className="border-t mt-16 pt-10">

          <div className="flex flex-wrap justify-center gap-3">

            {expertise.map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-100
                  text-slate-700
                  text-sm
                "
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}