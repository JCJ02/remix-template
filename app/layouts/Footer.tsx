import { Link } from "@remix-run/react";
import { yearToday } from "~/utilities/yearToday";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = yearToday();
  return (
    <footer className="flex flex-col gap-2">
      <div className="flex justify-center items-center gap-2 w-full">
        <Link
          className="text-3xl hover:text-blue-800"
          to={"https://facebook.com/akosijcjacobe"}
          target="_blank"
        >
          <FaFacebook />
        </Link>
        <Link
          className="text-3xl hover:text-gray-500"
          to={"https://github.com/JCJ02"}
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          className="text-3xl hover:text-blue-600"
          to={"https://linkedin.com/in/jcj02"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
      <p className="font-sans">© {year} JC Jacobe | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
