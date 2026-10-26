import { EXPERIENCES } from "../constants";
import { motion, useReducedMotion } from "framer-motion";

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-b border-neutral-900 pb-16 sm:pb-20"
    >
      <motion.h2
        id="experience-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl sm:text-4xl"
      >
        Experience
      </motion.h2>

      <ol className="mx-auto max-w-5xl">
        {EXPERIENCES.map((experience) => (
          <motion.li
            key={`${experience.company}-${experience.role}`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            viewport={{ once: true, amount: 0.02 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative border-l border-neutral-800 pb-10 pl-4 last:pb-0 sm:pl-8 md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8 md:pb-12"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-green-400 ring-4 ring-neutral-950"
            />
            <p className="mb-3 text-sm leading-6 text-neutral-400 md:mb-0">
              {experience.year}
            </p>
            <article className="min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6 md:-mt-5">
              <h3 className="break-words text-lg font-semibold leading-snug text-neutral-100 sm:text-xl">
                {experience.role}
              </h3>
              <div className="mt-2 flex items-center gap-3">
                {experience.logo && (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-10 w-10 shrink-0 rounded-md bg-white object-contain p-1"
                    loading="lazy"
                  />
                )}
                <p className="min-w-0 break-words text-sm font-medium leading-relaxed text-green-300">
                  {experience.company}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-7">
                {experience.description}
              </p>
              <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="max-w-full break-words rounded-md border border-green-400/15 bg-green-400/5 px-2.5 py-1 text-xs font-medium leading-5 text-green-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
