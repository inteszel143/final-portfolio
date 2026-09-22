import { BACKEND, FRONTEND, HERO_CONTENT } from "../constants";
import profilePic from "../assets/edzelHero.png";
import resumePdf from "../assets/resume/Intes Resume.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-4xl font-semibold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Hello, I`m Edzel Intes
            </motion.h1>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-1 max-w-xl py-4 text-neutral-400 tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-1 max-w-xl py-4 text-neutral-400 tracking-tighter"
            >
              {FRONTEND}
            </motion.p>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-1 max-w-xl py-4 text-neutral-400 tracking-tighter"
            >
              {BACKEND}
            </motion.p>
            <motion.a
              variants={container(2)}
              initial="hidden"
              animate="visible"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-neutral-300 px-6 py-3 text-center text-base font-medium text-neutral-950 transition-colors hover:bg-neutral-200 active:bg-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:w-auto"
            >
              View Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center  hover:-translate-y-3 transition-all duration-300 cursor-pointer">
            <motion.img
              variants={container(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              src={profilePic}
              alt="Edzel Intes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
