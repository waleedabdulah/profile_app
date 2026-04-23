import { education } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const Education = ({ theme }) => {
  const dark = theme === "dark";
  return (
    <section
      id="education"
      className={`py-20 px-4 sm:px-6 ${dark ? "bg-gray-900 text-white" : "bg-white text-slate-900"}`}
    >
      <div className="max-w-3xl mx-auto">

        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-indigo-600"}`}>
              My background
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Education</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${dark ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`} />
          </div>
        </AnimateIn>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <AnimateIn key={edu.id} direction="up" delay={i * 120}>
              <div className={`flex flex-col sm:flex-row items-start gap-5 rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                dark
                  ? "bg-gray-950 border-gray-800 hover:border-blue-500/40"
                  : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-100/60"
              }`}>
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${dark ? "bg-blue-500/10 text-blue-400" : "bg-indigo-50 text-indigo-500"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      dark
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        : "bg-purple-50 text-purple-700 border border-purple-200"
                    }`}>
                      {edu.year}
                    </span>
                  </div>
                  <p className={`text-sm font-medium mb-2 ${dark ? "text-blue-400" : "text-indigo-600"}`}>
                    {edu.institution}
                  </p>
                  {edu.note && (
                    <p className={`text-sm flex items-center gap-1.5 ${dark ? "text-gray-400" : "text-slate-500"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 flex-shrink-0 ${dark ? "text-yellow-400" : "text-amber-500"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {edu.note}
                    </p>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
