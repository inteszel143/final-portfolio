import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import logo from "../assets/logoRemove.png";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edzel-intes1998/", Icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/inteszel143", Icon: FaGithub },
  { label: "Instagram", href: "https://www.instagram.com/_zelntsprs/", Icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/edzelintes/", Icon: FaFacebook },
];

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["home", "experience", "projects", "technologies", "contact"];

const scrollToHash = (hash, reduceMotion) => {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
  window.history.pushState(null, "", hash);
  return true;
};

const Navbar = () => {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const menuButton = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const handleSectionClick = (event, href) => {
    if (!href.startsWith("#")) return;
    if (scrollToHash(href, reduceMotion)) {
      event.preventDefault();
      setActiveHash(href);
      closeMenu();
    }
  };

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="relative z-50 mb-12 px-2 pt-3 sm:mb-16 sm:px-3 sm:pt-5 lg:px-4"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          closeMenu();
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-6xl p-2 lg:px-4"
      >
        <div className="flex min-h-14 items-center justify-between gap-3">
          <a
            href="#home"
            onClick={(event) => handleSectionClick(event, "#home")}
            aria-label="Edzel Intes — home"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
          >
            <img className="h-9 w-9 object-contain" src={logo} alt="" />
          </a>

          <LayoutGroup>
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  className={`navbar-link relative ${activeHash === href ? "text-white" : ""}`}
                  href={href}
                  aria-current={activeHash === href ? "true" : undefined}
                  onClick={(event) => handleSectionClick(event, href)}
                >
                  {activeHash === href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              ))}
            </div>
          </LayoutGroup>

          <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:gap-4">
            <div className="hidden items-center border-r border-white/10 pr-4 lg:flex">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="flex h-11 w-11 items-center justify-center rounded-full text-lg text-neutral-400 transition-colors hover:bg-white/5 hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300">
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(event) => handleSectionClick(event, "#contact")}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-green-300 px-4 text-xs font-semibold text-neutral-950 transition-colors hover:bg-green-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:px-5 sm:text-sm"
            >
              Let’s talk <FiArrowUpRight aria-hidden="true" className="text-base" />
            </a>
            <button
              ref={menuButton}
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-neutral-200 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 lg:hidden"
            >
              {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div id="mobile-navigation" hidden={!menuOpen} className={menuOpen ? "mt-2 border-t border-white/10 px-2 pb-2 pt-3 lg:hidden" : "hidden"}>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                aria-current={activeHash === href ? "true" : undefined}
                onClick={(event) => handleSectionClick(event, href)}
                className={`navbar-link justify-start ${activeHash === href ? "bg-white/5 text-white" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={closeMenu} aria-label={`${label} (opens in a new tab)`} className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-neutral-400 transition-colors hover:bg-white/5 hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300">
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
