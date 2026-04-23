import { skills } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const CATEGORY_ICONS = {
  Frontend: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Backend: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  "DevOps & Tools": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const FallbackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const Skills = ({ theme }) => {
  const dark = theme === "dark";
  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 ${dark ? "bg-gray-950 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="max-w-4xl mx-auto">

        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-indigo-600"}`}>
              What I work with
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Skills</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${dark ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`} />
          </div>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <AnimateIn key={group.category} direction="up" delay={i * 110}>
              <div className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                dark
                  ? "bg-gray-900 border-gray-800 hover:border-blue-500/40"
                  : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-100/60"
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={dark ? "text-blue-400" : "text-indigo-500"}>
                    {CATEGORY_ICONS[group.category] ?? <FallbackIcon />}
                  </span>
                  <h3 className="text-base font-bold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      dark
                        ? "bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20"
                        : "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100"
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
