import { useState } from "react";
import { meta } from "../data/data";
import AnimateIn from "./ui/AnimateIn";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: meta.email,
    href: `mailto:${meta.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "waleedjadoon",
    href: meta.github,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "waleedjadoon",
    href: meta.linkedin,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Contact = ({ theme }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200 focus:ring-2 ${
    theme === "dark"
      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
  }`;

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 ${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto">

        {/* Section heading */}
        <AnimateIn direction="up">
          <div className="mb-12 text-center">
            <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
              Let&apos;s talk
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Contact</h2>
            <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-blue-600 to-purple-600"}`} />
            <p className={`mt-4 text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-5 gap-8">

          {/* Contact links — slide in from left, staggered */}
          <div className="sm:col-span-2 flex flex-col gap-5">
            {CONTACT_LINKS.map(({ label, value, href, icon }, i) => (
              <AnimateIn key={label} direction="left" delay={i * 110}>
                <a
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:scale-[1.02] group ${theme === "dark" ? "bg-gray-900 border-gray-800 hover:border-blue-500/40" : "bg-white border-gray-100 hover:border-blue-300"}`}
                >
                  <span className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${theme === "dark" ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20" : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"}`}>
                    {icon}
                  </span>
                  <div>
                    <p className={`text-xs font-medium mb-0.5 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{label}</p>
                    <p className={`text-sm font-semibold truncate max-w-[140px] ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{value}</p>
                  </div>
                </a>
              </AnimateIn>
            ))}
          </div>

          {/* Contact form — slides in from right */}
          <AnimateIn direction="right" delay={150} className="sm:col-span-3">
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl border p-6 shadow-sm flex flex-col gap-4 h-full ${theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"}`}
            >
              <div>
                <label htmlFor="name" className={`block text-xs font-medium mb-1.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Your Name</label>
                <input id="name" name="name" type="text" required placeholder="John Doe" value={form.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={`block text-xs font-medium mb-1.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Email Address</label>
                <input id="email" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className={`block text-xs font-medium mb-1.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project or just say hi!" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
              </div>

              {status === "sent" && <p className="text-sm text-green-500 font-medium">Your email client should have opened. Talk soon!</p>}
              {status === "error" && <p className="text-sm text-red-500 font-medium">Something went wrong. Please email me directly.</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`mt-1 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed shadow-md ${theme === "dark" ? "bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/30" : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30"}`}
              >
                {status === "sending" ? "Opening mail client…" : "Send Message"}
              </button>
            </form>
          </AnimateIn>

        </div>
      </div>

      {/* Footer */}
      <p className={`mt-16 text-center text-xs ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}>
        &copy; {new Date().getFullYear()} {meta.name}. Built with React &amp; Tailwind CSS.
      </p>
    </section>
  );
};

export default Contact;
