import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import { FiMonitor } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const FLOAT_BUTTON_LABEL = "Personal App";

const App = () => {
  const reduceMotion = useReducedMotion();
  const [typedLabel, setTypedLabel] = useState(reduceMotion ? FLOAT_BUTTON_LABEL : "");

  useEffect(() => {
    if (reduceMotion) {
      setTypedLabel(FLOAT_BUTTON_LABEL);
      return undefined;
    }

    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      if (isDeleting) {
        characterIndex -= 1;
      } else {
        characterIndex += 1;
      }

      setTypedLabel(FLOAT_BUTTON_LABEL.slice(0, characterIndex));

      if (!isDeleting && characterIndex === FLOAT_BUTTON_LABEL.length) {
        isDeleting = true;
        timeoutId = window.setTimeout(tick, 1200);
        return;
      }

      if (isDeleting && characterIndex === 0) {
        isDeleting = false;
      }

      timeoutId = window.setTimeout(tick, isDeleting ? 70 : 110);
    };

    timeoutId = window.setTimeout(tick, 110);
    return () => window.clearTimeout(timeoutId);
  }, [reduceMotion]);

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
        href="#personal-app"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#303038] bg-[#16161c] px-5 py-3 text-sm font-medium text-neutral-100 shadow-lg transition-colors hover:bg-[#202028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:bottom-6 sm:right-6 sm:px-6 sm:py-4 sm:text-base"
        aria-label="Go to Personal App"
      >
        <FiMonitor aria-hidden="true" className="h-5 w-5 shrink-0 text-green-300" />
        <span className="relative">
          <span className="invisible" aria-hidden="true">{FLOAT_BUTTON_LABEL}</span>
          <span aria-hidden="true" className="absolute inset-0 whitespace-nowrap">{typedLabel}</span>
        </span>
      </a>
    </div>
  );
};

export default App;
