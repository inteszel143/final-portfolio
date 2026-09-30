import { PROJECTS } from "../constants";
import { FaApple, FaGithub } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";
import { motion, useReducedMotion } from "framer-motion";

const PROJECT_LINKS = [
  { key: "apple", label: "App Store", Icon: FaApple },
  { key: "google", label: "Google Play", Icon: BsGooglePlay },
  { key: "github", label: "GitHub", Icon: FaGithub },
];

const Project = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="projects-heading"
      className="border-b border-neutral-900 pb-16 sm:pb-20"
    >
      <motion.h2
        id="projects-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-8 sm:gap-10">
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 sm:p-6 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-8 lg:p-8"
          >
            <div className="overflow-hidden rounded-xl bg-white">
              <img
                width={800}
                height={600}
                src={project.image}
                alt={`${project.title} app preview`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-contain"
              />
            </div>

            <div className="min-w-0 pt-6 lg:pt-0">
              <h3 className="break-words text-xl font-semibold leading-snug text-neutral-100 sm:text-2xl">
                {project.title}
              </h3>
              {project.description && (
                <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-7">
                  {project.description}
                </p>
              )}
              {project.technologies?.length > 0 && (
                <ul
                  aria-label="Technologies used"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="max-w-full break-words rounded-md border border-green-400/15 bg-green-400/5 px-2.5 py-1 text-xs font-medium leading-5 text-green-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              )}
              {PROJECT_LINKS.some(({ key }) => project[key]) && (
                <div className="mt-6 flex flex-wrap gap-3 border-t border-neutral-800 pt-5">
                  {PROJECT_LINKS.filter(({ key }) => project[key]).map(
                    ({ key, label, Icon }) => (
                      <a
                        key={key}
                        href={project[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} for ${project.title} (opens in a new tab)`}
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-green-400/50 hover:bg-green-400/10 hover:text-green-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:w-auto"
                      >
                        <Icon aria-hidden="true" className="shrink-0 text-base" />
                        {label}
                      </a>
                    ),
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Project;
