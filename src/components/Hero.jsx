import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/edzelHero.png";
import resumePdf from "../assets/resume/Intes Resume.pdf";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaAws } from "react-icons/fa";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { SiTypescript, SiReact, SiExpo, SiNextdotjs, SiNodedotjs, SiFlutter, SiFirebase, SiMongodb } from "react-icons/si";

const coreStack = [
  { name: "React Native", Icon: SiReact, color: "text-cyan-400" },
  { name: "Expo", Icon: SiExpo, color: "text-neutral-100" },
  { name: "React", Icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-neutral-100" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
  { name: "Flutter", Icon: SiFlutter, color: "text-sky-400" },
  { name: "AWS", Icon: FaAws, color: "text-orange-400" },
  { name: "Firebase", Icon: SiFirebase, color: "text-amber-400" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-400" },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [contributionsUnavailable, setContributionsUnavailable] = useState(false);

  return (
    <section
      id="home"
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
            Full Stack Mobile & Web Developer
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

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:mt-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]">
        <motion.section
          aria-labelledby="core-stack-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="flex min-w-0 flex-col rounded-3xl border border-neutral-800 bg-[#161616] p-6 sm:p-7"
        >
          <h2 id="core-stack-heading" className="text-lg font-semibold text-neutral-100">
            Core stack
          </h2>
          <ul className="my-6 grid max-w-sm grid-cols-4 gap-3">
            {coreStack.map(({ name, Icon, color }) => (
              <li
                key={name}
                title={name}
                className="flex aspect-square items-center justify-center rounded-full border border-neutral-800 bg-[#202020]"
              >
                <Icon aria-hidden="true" className={`h-7 w-7 ${color}`} />
                <span className="sr-only">{name}</span>
              </li>
            ))}
          </ul>
          <a
            href="#technologies"
            className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded text-sm text-neutral-400 transition-colors hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            See full tech stack <FiArrowRight aria-hidden="true" />
          </a>
        </motion.section>
        <motion.section
          aria-labelledby="github-contributions-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}
          className="flex min-w-0 flex-col justify-center rounded-3xl border border-neutral-800 bg-[#161616] p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 id="github-contributions-heading" className="text-lg font-semibold text-neutral-100">
                GitHub Contributions
              </h2>
              <p className="mt-1 text-sm text-neutral-400">My coding activity over the last year.</p>
            </div>
            <a
              href="https://github.com/inteszel143"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-neutral-800 bg-[#202020] px-3 text-sm text-neutral-400 transition-colors hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              @inteszel143 <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          {contributionsUnavailable ? (
            <p role="status" className="mt-6 text-sm leading-7 text-neutral-400">
              The contribution calendar is temporarily unavailable. Visit my GitHub
              profile to see my latest activity.
            </p>
          ) : (
            <div
              role="region"
              aria-label="GitHub contribution calendar, scroll horizontally to see the full year"
              tabIndex={0}
              className="mt-6 overflow-x-auto rounded pb-3 [scrollbar-color:#525252_#161616] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <img
                src="https://ghchart.rshah.org/inteszel143"
                alt="GitHub contribution calendar for inteszel143 over the last year"
                loading="lazy"
                decoding="async"
                onError={() => setContributionsUnavailable(true)}
                className="block w-full min-w-[640px] invert hue-rotate-180 mix-blend-screen"
              />
            </div>
          )}
        </motion.section>
      </div>
    </section>
  );
};

export default Hero;
