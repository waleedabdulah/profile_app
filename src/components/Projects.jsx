import { projects } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const Projects = ({ theme }) => {
  const dark = theme === "dark";
  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 ${dark ? "bg-gray-900 text-white" : "bg-white text-slate-900"}`}
    >
      <div className="max-w-5xl mx-auto">

        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-indigo-600"}`}>
              What I&apos;ve built
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Projects</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${dark ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`} />
          </div>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateIn key={project.id} direction="up" delay={i * 110}>
              <article className={`group flex flex-col h-full rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                dark
                  ? "bg-gray-950 border-gray-800 hover:border-blue-500/40"
                  : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-indigo-100/60"
              }`}>

                {/* Top row: folder icon + links */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-xl ${dark ? "bg-blue-500/10" : "bg-indigo-50"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${dark ? "text-blue-400" : "text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className={`transition-all duration-200 hover:scale-110 ${dark ? "text-gray-500 hover:text-white" : "text-slate-400 hover:text-slate-900"}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className={`transition-all duration-200 hover:scale-110 ${dark ? "text-gray-500 hover:text-blue-400" : "text-slate-400 hover:text-indigo-600"}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold mb-2 leading-snug">{project.title}</h3>

                <p className={`text-sm leading-relaxed flex-1 ${dark ? "text-gray-400" : "text-slate-500"}`}>
                  {project.description}
                </p>

                <div className={`flex flex-wrap gap-2 mt-5 pt-5 border-t ${dark ? "border-gray-800" : "border-slate-100"}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                        dark
                          ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </article>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
