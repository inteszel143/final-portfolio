import { RiReactjsLine } from "react-icons/ri";
import { SiFlutter, SiMongodb, SiMysql, SiNextdotjs, SiSupabase } from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="scroll-mt-20 border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl sm:text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-6"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <RiReactjsLine title="React" className="text-5xl sm:text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <SiTailwindcss className="text-5xl sm:text-7xl text-cyan-300 " />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <SiExpo className="text-5xl sm:text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <FaLaravel className="text-5xl sm:text-7xl text-orange-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <IoLogoJavascript className="text-5xl sm:text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <FaNodeJs className="text-5xl sm:text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <SiMongodb className="text-5xl sm:text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
        >
          <RiFirebaseFill className="text-5xl sm:text-7xl text-yellow-500" />
        </motion.div>
        {[
          { name: "Flutter", Icon: SiFlutter, color: "text-sky-400", duration: 3 },
          { name: "AWS", Icon: FaAws, color: "text-orange-400", duration: 4.5 },
          { name: "NextJS", Icon: SiNextdotjs, color: "text-white", duration: 2.5 },
          { name: "MySQL", Icon: SiMysql, color: "text-sky-500", duration: 5 },
          { name: "Supabase", Icon: SiSupabase, color: "text-emerald-400", duration: 3.5 },
        ].map(({ name, Icon, color, duration }) => (
          <motion.div
            key={name}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3 sm:p-4"
          >
            <Icon title={name} className={`text-5xl sm:text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
