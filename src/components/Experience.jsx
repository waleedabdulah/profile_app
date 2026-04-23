import { experience } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const Experience = ({ theme }) => {
  const dark = theme === "dark";
  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 ${dark ? "bg-gray-950 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="max-w-3xl mx-auto">

        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-indigo-600"}`}>
              My journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Experience</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${dark ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`} />
          </div>
        </AnimateIn>

        <ol className={`relative border-l-2 ml-4 space-y-10 ${dark ? "border-blue-500/30" : "border-indigo-300/60"}`}>
          {experience.map((job, i) => (
            <li key={job.id} className="ml-8">
              {/* Timeline dot */}
              <span className={`absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ${dark ? "bg-blue-500 ring-gray-950" : "bg-indigo-500 ring-slate-50"}`}>
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <AnimateIn direction="left" delay={i * 130}>
                <div className={`rounded-2xl p-6 shadow-sm border transition-all duration-300 hover:shadow-md ${
                  dark
                    ? "bg-gray-900 border-gray-800 hover:border-blue-500/40"
                    : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-100"
                }`}>
                  <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${
                    dark
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                  }`}>
                    {job.period}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-0.5">{job.role}</h3>
                  <p className={`text-sm font-medium mb-4 ${dark ? "text-purple-400" : "text-purple-600"}`}>
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.description.map((point, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm leading-relaxed ${dark ? "text-gray-300" : "text-slate-600"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`mt-0.5 h-4 w-4 flex-shrink-0 ${dark ? "text-blue-400" : "text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Nested key projects */}
                  {job.projects?.length > 0 && (
                    <div className="mt-5 space-y-3">
                      <p className={`text-xs font-semibold uppercase tracking-wider ${dark ? "text-blue-400/80" : "text-indigo-600"}`}>
                        Key Projects
                      </p>
                      {job.projects.map((proj, pi) => (
                        <div key={pi} className={`rounded-xl border p-4 ${dark ? "bg-gray-950 border-gray-700" : "bg-slate-50 border-slate-200"}`}>
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="text-sm font-bold">{proj.title}</h4>
                            {proj.live && (
                              <a href={proj.live} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                                className={`shrink-0 transition-colors ${dark ? "text-blue-400 hover:text-blue-300" : "text-indigo-500 hover:text-indigo-700"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </div>

                          <p className={`text-xs leading-relaxed mb-3 ${dark ? "text-gray-400" : "text-slate-500"}`}>
                            {proj.description}
                          </p>

                          <ul className="space-y-1.5 mb-3">
                            {proj.highlights.map((h, hi) => (
                              <li key={hi} className={`flex items-start gap-2 text-xs leading-relaxed ${dark ? "text-gray-300" : "text-slate-600"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`mt-0.5 w-3.5 h-3.5 flex-shrink-0 ${dark ? "text-blue-400" : "text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {h}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-1.5">
                            {proj.tags.map((tag) => (
                              <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${
                                dark
                                  ? "bg-blue-500/10 text-blue-300"
                                  : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                              }`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
