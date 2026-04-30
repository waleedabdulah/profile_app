import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { meta } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const CONTACT_LINKS = [
  // {
  //   label: "Email",
  //   value: meta.email,
  //   href: `mailto:${meta.email}`,
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  //     </svg>
  //   ),
  // },
  {
    label: "GitHub",
    value: "waleedabdullah",
    href: meta.github,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "waleedabdullah",
    href: meta.linkedin,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Contact = ({ theme }) => {
  const dark = theme === "dark";
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200 focus:ring-2 ${
    dark
      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
      : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20"
  }`;

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 ${dark ? "bg-gray-950 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="max-w-3xl mx-auto">

        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${dark ? "text-blue-400" : "text-indigo-600"}`}>
              Let&apos;s talk
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Contact</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${dark ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`} />
            <p className={`mt-4 text-sm sm:text-base ${dark ? "text-gray-400" : "text-slate-500"}`}>
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-5 gap-8">

          <div className="sm:col-span-2 flex flex-col gap-5">
            {CONTACT_LINKS.map(({ label, value, href, icon }, i) => (
              <AnimateIn key={label} direction="left" delay={i * 110}>
                <a
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.02] group outline-none focus-visible:ring-2 ${
                    dark
                      ? "bg-gray-900 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 focus-visible:ring-blue-500"
                      : "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-100 focus-visible:ring-indigo-400"
                  }`}
                >
                  <span className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    dark
                      ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300"
                      : "bg-indigo-50 text-indigo-500 group-hover:bg-indigo-100 group-hover:text-indigo-700"
                  }`}>
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-xs font-medium mb-0.5 ${dark ? "text-gray-500" : "text-slate-400"}`}>{label}</p>
                    <p className={`text-sm font-semibold truncate ${dark ? "text-white" : "text-slate-900"}`}>{value}</p>
                  </div>
                  {/* Arrow indicator */}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto w-4 h-4 flex-shrink-0 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 ${dark ? "text-blue-400" : "text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn direction="right" delay={150} className="sm:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`rounded-2xl border p-6 shadow-sm flex flex-col gap-4 h-full ${
                dark
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <div>
                <label htmlFor="name" className={`block text-xs font-medium mb-1.5 ${dark ? "text-gray-400" : "text-slate-600"}`}>Your Name</label>
                <input id="name" name="name" type="text" required placeholder="John Doe" value={form.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={`block text-xs font-medium mb-1.5 ${dark ? "text-gray-400" : "text-slate-600"}`}>Email Address</label>
                <input id="email" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className={`block text-xs font-medium mb-1.5 ${dark ? "text-gray-400" : "text-slate-600"}`}>Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project or just say hi!" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
              </div>

              {status === "sent" && (
                <p className="text-sm text-green-600 font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Something went wrong. Email me at {meta.email}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`mt-1 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed shadow-md ${
                  dark
                    ? "bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/30"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25"
                }`}
              >
                {status === "sending" ? "Opening mail client…" : "Send Message"}
              </button>
            </form>
          </AnimateIn>

        </div>
      </div>

      <p className={`mt-16 text-center text-xs ${dark ? "text-gray-600" : "text-slate-400"}`}>
        &copy; {new Date().getFullYear()} {meta.name}. Built with React &amp; Tailwind CSS.
      </p>
    </section>
  );
};

export default Contact;
