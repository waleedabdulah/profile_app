import { experience } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const Experience = ({ theme }) => {
  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 ${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto">

        {/* Section heading */}
        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
              My journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Experience</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-blue-600 to-purple-600"}`} />
          </div>
        </AnimateIn>

        {/* Timeline */}
        <ol className="relative border-l-2 border-blue-500/30 ml-4 space-y-10">
          {experience.map((job, i) => (
            <li key={job.id} className="ml-8">
              {/* Timeline dot */}
              <span className={`absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ${theme === "dark" ? "bg-blue-500 ring-gray-950" : "bg-blue-600 ring-gray-50"}`}>
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              {/* Card — slides in from the left, staggered */}
              <AnimateIn direction="left" delay={i * 130}>
                <div className={`rounded-2xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md ${theme === "dark" ? "bg-gray-900 border-gray-800 hover:border-blue-500/40" : "bg-white border-gray-100 hover:border-blue-300"}`}>
                  <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${theme === "dark" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-blue-50 text-blue-600 border border-blue-200"}`}>
                    {job.period}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-0.5">{job.role}</h3>
                  <p className={`text-sm font-medium mb-4 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.description.map((point, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`mt-0.5 h-4 w-4 flex-shrink-0 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
};

export default Experience;
