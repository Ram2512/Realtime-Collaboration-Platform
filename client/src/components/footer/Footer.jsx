import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Ram2512"
        className="icon"
        target="_blank"
      >
        {/* <FaGithub size={24} /> */}
      </a>
      <a
        href="https://www.linkedin.com/in/ram4/"
        className="icon"
        target="_blank"
      >
        {/* <FaLinkedin size={24} /> */}
      </a>
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          href="#"
          target="_blank"
          className="ram"
        >
         Ram Rathore
        </a>
      </p>
    </footer>
  );
};

export default Footer;
