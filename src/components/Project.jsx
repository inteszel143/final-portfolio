import { PROJECTS } from "../constants";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <img
                width={500}
                height={500}
                src={item?.image}
                alt={item?.title}
                className="mb-6 rounded  hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-2 font-semibold">{item?.title}</h6>
              <p className="mb-4 text-neutral-400">{item?.description}</p>
              {item?.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-700"
                >
                  {tech}
                </span>
              ))}
              <div className="flex flex-wrap gap-3 mt-10">
                <a href={item?.apple} target="_blank">
                  <div className="rounded-lg border-2 border-neutral-800 px-4 py-3 cursor-pointer flex items-center gap-2  transition-transform transform scale-100 group hover:scale-110">
                    <FaApple />
                    <span className="text-sm">Apple store</span>
                  </div>
                </a>
                <a href={item?.google} target="_blank">
                  <div className="rounded-lg border-2 border-neutral-800 px-4 py-3 cursor-pointer flex items-center gap-2  transition-transform transform scale-100 group hover:scale-110">
                    <BsGooglePlay />
                    <span className="text-sm">Google Play</span>
                  </div>
                </a>
                {/* <div className="rounded-lg border-2 border-neutral-800 px-4 py-3 cursor-pointer flex items-center gap-2  transition-transform transform scale-100 group hover:scale-110">
                  <MdOutlineRemoveRedEye />
                  <span className="text-sm">Preview</span>
                </div> */}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
