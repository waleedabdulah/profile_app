import { projects } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const Projects = ({ theme }) => {
  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
              What I&apos;ve built
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Projects</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-blue-600 to-purple-600"}`} />
          </div>
        </AnimateIn>

        {/* Project grid — each card slides up, staggered */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateIn key={project.id} direction="up" delay={i * 110}>
              <article className={`flex flex-col h-full rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${theme === "dark" ? "bg-gray-950 border-gray-800 hover:border-blue-500/40" : "bg-gray-50 border-gray-100 hover:border-blue-300"}`}>
                {/* Folder icon + links */}
                <div className="mb-4 flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                  </svg>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className={`transition-all duration-200 hover:scale-110 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className={`transition-all duration-200 hover:scale-110 ${theme === "dark" ? "text-gray-400 hover:text-blue-400" : "text-gray-500 hover:text-blue-600"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className={`text-sm leading-relaxed mb-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  {project.description}
                </p>

                {/* Impact highlights — shown when the project has bullet points */}
                {project.highlights?.length > 0 ? (
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {project.highlights.map((point, j) => (
                      <li key={j} className={`flex items-start gap-2 text-xs leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`mt-0.5 w-3.5 h-3.5 flex-shrink-0 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex-1" />
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-md ${theme === "dark" ? "bg-blue-500/10 text-blue-300" : "bg-blue-50 text-blue-700"}`}>
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
