import { BACKEND, FRONTEND, HERO_CONTENT } from "../constants";
import profilePic from "../assets/edzelHero.png";
import resumePdf from "../assets/resume/Intes Resume.pdf";
import { motion, useReducedMotion } from "framer-motion";

const skillGroups = [
  { title: "Frontend", description: FRONTEND.replace(/^Frontend:\s*/, "") },
  { title: "Backend", description: BACKEND.replace(/^Backend:\s*/, "") },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="intro-heading"
      className="border-b border-neutral-900 pb-16 sm:pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-0"
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-green-300">
            Full Stack Mobile Developer
          </p>
          <h1
            id="intro-heading"
            className="text-4xl font-semibold leading-tight tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl"
          >
            Hello, I’m <span className="block">Edzel Intes</span>
          </h1>
          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-7">
            {HERO_CONTENT.split(/\n\s*\n/).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-neutral-200 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:w-auto"
          >
            View Resume
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.1 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <img
            width={550}
            height={550}
            src={profilePic}
            alt="Portrait of Edzel Intes"
            className="aspect-square w-full rounded-xl object-contain"
          />
        </motion.div>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-12 md:grid-cols-2 md:gap-6">
        {skillGroups.map(({ title, description }) => (
          <div
            key={title}
            className="min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6"
          >
            <h2 className="text-base font-semibold text-green-300">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
