import { FiMessageCircle } from "react-icons/fi";
import { CONTACT } from "./constants";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
const App = () => {
  return (
    <div className="text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Navbar />
      <div className="container mx-auto px-4 pb-24 pt-32 sm:px-8 sm:pt-40">
        <Hero />
        <Experience />
        <Project />
        <Technologies />
        <Contact />
      </div>
      <a
        href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Project inquiry — Let’s work together")}`}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#303038] bg-[#16161c] px-5 py-3 text-sm font-medium text-neutral-100 shadow-lg transition-colors hover:bg-[#202028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:bottom-6 sm:right-6 sm:px-6 sm:py-4 sm:text-base"
        aria-label="Let’s work together (opens your email app)"
      >
        <FiMessageCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-green-300 sm:h-6 sm:w-6" />
        Let’s work together
      </a>
    </div>
  );
};

export default App;
