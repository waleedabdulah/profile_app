import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className={theme === 'dark' ? 'dark bg-gray-950 min-h-screen' : 'light bg-slate-50 min-h-screen'}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Skills theme={theme} />
        <Education theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
}
