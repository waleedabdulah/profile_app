import { about, meta } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const About = ({ theme }) => {
  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
              Get to know me
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">About Me</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-blue-600 to-purple-600"}`} />
          </div>
        </AnimateIn>

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Avatar / Photo — slides in from the right */}
          <AnimateIn direction="right" delay={100} className="flex-shrink-0">
            {about.photoUrl ? (
              <img
                src={about.photoUrl}
                alt={meta.name}
                className="w-40 h-40 rounded-full object-cover ring-4 ring-blue-500/30 shadow-xl"
              />
            ) : (
              <div className={`w-40 h-40 rounded-full flex items-center justify-center text-5xl font-bold ring-4 shadow-xl ${theme === "dark" ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white ring-blue-500/30" : "bg-gradient-to-br from-blue-500 to-purple-500 text-white ring-blue-400/30"}`}>
                {meta.name.split(" ").map((n) => n[0]).join("")}
              </div>
            )}
          </AnimateIn>

          {/* Bio — slides in from the left */}
          <div className="flex-1 space-y-4">
            {about.bio.map((paragraph, i) => (
              <AnimateIn key={i} direction="left" delay={i * 120}>
                <p className={`text-base sm:text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  {paragraph}
                </p>
              </AnimateIn>
            ))}

            {/* Quick-info chips */}
            <AnimateIn direction="up" delay={240}>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "Location", value: "Pakistan" },
                  { label: "Focus",    value: "Full-Stack" },
                  { label: "Available", value: "Open to work" },
                ].map(({ label, value }) => (
                  <span
                    key={label}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${theme === "dark" ? "bg-blue-500/10 text-blue-300 border border-blue-500/20" : "bg-blue-50 text-blue-700 border border-blue-200"}`}
                  >
                    <span className="opacity-70">{label}:</span> {value}
                  </span>
                ))}
              </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn direction="up" delay={360}>
              <div className="pt-2">
                <a
                  href={`mailto:${meta.email}`}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md ${theme === "dark" ? "bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/30" : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30"}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Say Hello
                </a>
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
