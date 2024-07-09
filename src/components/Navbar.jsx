import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/logoRemove.png";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-between gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/edzel-intes1998/" target="_blank">
          <FaLinkedin className="cursor-pointer  hover:-translate-y-2 transition-all duration-300" />
        </a>

        <a href="https://github.com/inteszel143" target="_blank">
          <FaGithub className="cursor-pointer  hover:-translate-y-2 transition-all duration-300" />
        </a>
        <a href="https://www.instagram.com/_zelntsprs/" target="_blank">
          <FaInstagram className="cursor-pointer  hover:-translate-y-2 transition-all duration-300" />
        </a>
        <a href="https://www.facebook.com/edzelintes/" target="_blank">
          <FaFacebook className="cursor-pointer  hover:-translate-y-2 transition-all duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
