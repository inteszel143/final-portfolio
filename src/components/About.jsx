import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion, useReducedMotion } from "framer-motion";

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-heading"
      className="border-b border-neutral-900 py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:gap-10 sm:p-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:p-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-xs lg:max-w-none"
        >
          <img
            className="aspect-square w-full rounded-xl object-cover"
            src={aboutImg}
            alt="Developer working at a laptop"
            width={500}
            height={500}
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="min-w-0"
        >
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl"
          >
            About <span className="text-green-300">Me</span>
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-7">
            {ABOUT_TEXT.split(/\n\s*\n/).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
