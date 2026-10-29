import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/edzelHero.png";
import davaoOneLogo from "../assets/logo/davaoone.png";
import kapeGoLogo from "../assets/logo/KapeGo.png";
import resumePdf from "../assets/resume/Intes Resume.pdf";
import personalAppScreen1 from "../assets/personal-app/ss1.png";
import personalAppScreen2 from "../assets/personal-app/ss2.png";
import personalAppScreen3 from "../assets/personal-app/ss3.png";
import personalAppScreen4 from "../assets/personal-app/ss4.png";
import personalAppScreen5 from "../assets/personal-app/ss5.png";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaAws } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import {
  SiTypescript,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

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

const personalAppScreens = [
  personalAppScreen1,
  personalAppScreen2,
  personalAppScreen3,
  personalAppScreen4,
  personalAppScreen5,
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [selectedScreen, setSelectedScreen] = useState(null);
  const screenDialog = useRef(null);
  const [contributionsUnavailable, setContributionsUnavailable] =
    useState(false);

  useEffect(() => {
    const dialog = screenDialog.current;
    if (!dialog) return;

    if (selectedScreen !== null && !dialog.open) dialog.showModal();
    if (selectedScreen === null && dialog.open) dialog.close();
  }, [selectedScreen]);

  return (
    <section
      id="home"
      aria-labelledby="intro-heading"
      className="scroll-mt-20 border-b border-neutral-900 pb-16 sm:pb-20"
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
            <span className="block">Edzel Intes</span>
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
          <h2
            id="core-stack-heading"
            className="text-lg font-semibold text-neutral-100"
          >
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
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="flex min-w-0 flex-col justify-center rounded-3xl border border-neutral-800 bg-[#161616] p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2
                id="github-contributions-heading"
                className="text-lg font-semibold text-neutral-100"
              >
                GitHub Contributions
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                My coding activity over the last year.
              </p>
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
            <p
              role="status"
              className="mt-6 text-sm leading-7 text-neutral-400"
            >
              The contribution calendar is temporarily unavailable. Visit my
              GitHub profile to see my latest activity.
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

      <motion.section
        id="personal-app"
        aria-labelledby="personal-app-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reduceMotion ? 0 : 0.5 }}
        className="mx-auto mt-5 flex max-w-6xl flex-col gap-6 rounded-3xl border border-neutral-800 bg-[#161616] p-6 sm:p-8"
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <img
            src={davaoOneLogo}
            alt="DavaoOne app logo"
            width={128}
            height={128}
            loading="lazy"
            decoding="async"
            className="h-24 w-24 shrink-0 rounded-2xl object-contain sm:h-32 sm:w-32"
          />
          <div className="min-w-0 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <p className="text-sm font-medium text-green-300">Personal App · In Progress</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/20 bg-sky-400/5 px-2.5 py-1 text-xs font-medium text-sky-300">
                <FiSmartphone aria-hidden="true" /> Mobile App
              </span>
            </div>
            <h2
              id="personal-app-heading"
              className="mt-1 text-xl font-semibold leading-snug text-neutral-100 sm:text-2xl"
            >
              DavaoOne - Built for good governance, designed for Davaoeños.
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
              DavaoOne is the official mobile application developed in
              partnership with the Local Government of Davao City to bring
              public service closer to every Davaoeños.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-400 sm:text-base">
              Designed as a digital gateway to the city, the app empowers
              citizens through accessible information, timely updates, and
              seamless navigation of city services.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-400 sm:text-base">
              This app was created to promote transparency, good governance, and
              citizen empowerment by making essential public information and
              services more accessible through a centralized digital platform.
            </p>
            <p className="mt-3 text-sm font-medium text-amber-300">
              App preview below. DavaoOne is not yet available in the app stores.
            </p>
            <h3 className="mt-5 text-sm font-semibold text-neutral-200 sm:text-base">
              With DavaoOne, you can:
            </h3>
            <ul className="mt-3 space-y-2 text-left text-sm leading-7 text-neutral-400 sm:text-base">
              <li>
                🔍 Find clear guides and shortcuts to avail city services with
                ease
              </li>
              <li>
                📰 Browse the latest city news and official updates all in one
                place
              </li>
              <li>☎️ Quickly access emergency hotlines for help</li>
              <li>🚨 Report community issues directly from your phone</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-6 sm:pt-7">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-neutral-200 sm:text-base">
              App screens
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              A preview of the DavaoOne mobile app experience.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-5">
            {personalAppScreens.map((screen, index) => (
              <li key={screen} className="min-w-0">
                <figure className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/60 p-2 sm:p-3">
                  <button
                    type="button"
                    onClick={() => setSelectedScreen(index)}
                    aria-label={`View DavaoOne app screen ${index + 1} full size`}
                    className="block w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                  >
                    <img
                      src={screen}
                      alt={`DavaoOne app screen ${index + 1}`}
                      width={390}
                      height={844}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[9/19.5] w-full object-cover transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                    />
                  </button>
                  <figcaption className="pt-2 text-center text-xs text-neutral-400">
                    Screen {index + 1} · Click to enlarge
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <dialog
          ref={screenDialog}
          aria-label="DavaoOne app screenshot viewer"
          onClose={() => setSelectedScreen(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
          className="m-auto max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] overflow-visible rounded-2xl border border-neutral-700 bg-neutral-950 p-3 text-neutral-100 shadow-2xl backdrop:bg-black/85 sm:p-5"
        >
          {selectedScreen !== null && (
            <div className="flex max-h-[calc(100dvh-4rem)] flex-col items-center gap-3">
              <div className="flex w-full items-center justify-between gap-4">
                <p className="text-sm text-neutral-300">
                  DavaoOne screen {selectedScreen + 1} of {personalAppScreens.length}
                </p>
                <button
                  type="button"
                  autoFocus
                  onClick={() => screenDialog.current?.close()}
                  className="inline-flex min-h-11 items-center rounded-lg border border-neutral-700 px-4 text-sm font-medium hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                >
                  Close
                </button>
              </div>
              <img
                src={personalAppScreens[selectedScreen]}
                alt={`DavaoOne app screen ${selectedScreen + 1}, enlarged`}
                className="max-h-[calc(100dvh-9rem)] max-w-full rounded-lg object-contain"
              />
            </div>
          )}
        </dialog>
        <div className="flex flex-col items-center gap-5 border-t border-neutral-800 pt-6 sm:flex-row sm:items-start sm:pt-7">
          <img
            src={kapeGoLogo}
            alt="KapeGo app logo"
            width={128}
            height={128}
            loading="lazy"
            decoding="async"
            className="h-24 w-24 shrink-0 rounded-2xl object-contain sm:h-32 sm:w-32"
          />
          <div className="min-w-0 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <p className="text-sm font-medium text-green-300">Personal App · In Progress</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/20 bg-sky-400/5 px-2.5 py-1 text-xs font-medium text-sky-300">
                <FiSmartphone aria-hidden="true" /> Mobile App
              </span>
            </div>
            <h3 className="mt-1 text-xl font-semibold leading-snug text-neutral-100 sm:text-2xl">
              KapeGo – Your City. Your Coffee.
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
              KapeGo is a mobile platform designed to connect coffee lovers with
              local coffee shops in the City, making it easier to
              discover new places, explore menus, and support local businesses.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-400 sm:text-base">
              Designed as a convenient digital destination for the local coffee
              community, KapeGo helps customers find coffee shops, check
              available drinks and prices, explore special promotions, and
              discover their next favorite coffee spot—all in one place.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-400 sm:text-base">
              The platform also empowers local coffee shop owners by providing a
              digital space to showcase their businesses, promote their
              products, and reach more potential customers.
            </p>
            <p className="mt-3 text-sm font-medium text-amber-300">
              Currently in development; not yet live or available to download.
            </p>
            <h4 className="mt-5 text-sm font-semibold text-neutral-200 sm:text-base">
              With KapeGo, you can:
            </h4>
            <ul className="mt-3 space-y-2 text-left text-sm leading-7 text-neutral-400 sm:text-base">
              <li>
                ☕{" "}
                <strong className="font-semibold text-neutral-200">
                  Discover Local Coffee Shops
                </strong>{" "}
                — Explore coffee shops around City and find your next
                favorite spot.
              </li>
              <li>
                📋{" "}
                <strong className="font-semibold text-neutral-200">
                  Explore Menus and Prices
                </strong>{" "}
                — Browse available drinks, food items, and prices before
                visiting.
              </li>
              <li>
                📍{" "}
                <strong className="font-semibold text-neutral-200">
                  Find Coffee Near You
                </strong>{" "}
                — Check shop locations and get directions to participating
                coffee shops.
              </li>
              <li>
                🎉{" "}
                <strong className="font-semibold text-neutral-200">
                  Discover Promotions
                </strong>{" "}
                — Find special offers, discounts, and featured products from
                local vendors.
              </li>
              <li>
                ❤️{" "}
                <strong className="font-semibold text-neutral-200">
                  Save Your Favorites
                </strong>{" "}
                — Keep track of the coffee shops you love.
              </li>
              <li>
                🏪{" "}
                <strong className="font-semibold text-neutral-200">
                  Support Local Businesses
                </strong>{" "}
                — Help local coffee shops gain visibility and connect with more
                customers.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
              KapeGo aims to bring City growing coffee community
              closer together through a simple, accessible, and convenient
              digital experience.
            </p>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-6 sm:pt-7">
          <h4 className="text-sm font-semibold text-neutral-200 sm:text-base">
            App screens
          </h4>
          <p className="mt-1 text-sm text-neutral-400">
            KapeGo screenshots will appear here when added to the personal-app assets.
          </p>
        </div>
      </motion.section>
    </section>
  );
};

export default Hero;
