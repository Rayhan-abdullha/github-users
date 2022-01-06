import React from "react";
import { FaHashtag } from "react-icons/fa";
const Year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer p-8 pt-0 bg-gray-700 text-primary-content footer-center">
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        className="inline-block fill-current transform-cpu font-bold"
      >
        <FaHashtag />
      </svg>
      <p>Copyright &copy; {Year} All right reserved</p>
    </footer>
  );
};

export default Footer;
