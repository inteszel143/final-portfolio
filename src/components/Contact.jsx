import { CONTACT } from "../constants";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const emailHref = `mailto:${CONTACT.email}`;
  const phoneHref = `tel:${CONTACT.phoneNo.replace(/[^+\d]/g, "")}`;
  const linkClassName =
    "mt-3 inline-flex min-h-11 max-w-full items-center gap-2 rounded text-sm text-neutral-200 transition-colors hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950";

  return (
    <>
      <section
        aria-labelledby="contact-heading"
        className="border-b border-neutral-900 pb-16 sm:pb-20"
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 mt-20 max-w-2xl text-center"
        >
          <h2 id="contact-heading" className="text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
            Have a project in mind or want to work together? Let’s talk.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3 lg:gap-6"
        >
          <div className="min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6">
            <FiMail aria-hidden="true" className="mb-5 text-2xl text-green-300" />
            <h3 className="text-lg font-semibold text-neutral-100">Email</h3>
            <a href={emailHref} className={linkClassName}>
              <span className="min-w-0 break-words">{CONTACT.email}</span>
              <FiArrowUpRight aria-hidden="true" className="shrink-0" />
            </a>
          </div>

          <div className="min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6">
            <FiPhone aria-hidden="true" className="mb-5 text-2xl text-green-300" />
            <h3 className="text-lg font-semibold text-neutral-100">Phone</h3>
            <a href={phoneHref} className={linkClassName}>
              <span className="min-w-0 break-words">{CONTACT.phoneNo}</span>
              <FiArrowUpRight aria-hidden="true" className="shrink-0" />
            </a>
          </div>

          <div className="min-w-0 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6">
            <FiMapPin aria-hidden="true" className="mb-5 text-2xl text-green-300" />
            <h3 className="text-lg font-semibold text-neutral-100">Location</h3>
            <address className="mt-3 text-sm not-italic leading-7 text-neutral-400">
              {CONTACT.address.trim()}
              <span className="block text-neutral-200">Philippines</span>
            </address>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-xs leading-6 text-neutral-500 sm:text-sm">
        Copyright © {new Date().getFullYear()} Edzel Paras Intes
      </footer>
    </>
  );
};

export default Contact;
