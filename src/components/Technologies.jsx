import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
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
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-6 cursor-pointer"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiTailwindcss className="text-7xl text-cyan-300 " />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiExpo className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaLaravel className="text-7xl text-orange-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <RiFirebaseFill className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
