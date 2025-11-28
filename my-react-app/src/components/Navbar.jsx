import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import LogoIcon from "../assets/Logo.svg?react";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <a href="#logo" className={styles.logoContainer}>
        <LogoIcon className={styles.logoSvg} />
      </a>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#about-me" className={styles.navLink}>
            About me
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#certifications" className={styles.navLink}>
            Certifications
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact-info" className={styles.navLink}>
            Contact info
          </a>
        </li>
      </ul>

      <ul className={styles.navSocial}>
        <li className={styles.navMedia}>
          <a
            href="https://www.linkedin.com/in/em%C3%ADdio-pedro-b9a67b2a9/?trk=opento_sprofile_details"
            target="_blank"
            className={styles.navLink}
          >
            Linkedin
          </a>
        </li>
        <li className={styles.navMedia}>
          <a
            href="https://github.com/emidiop-05"
            target="_blank"
            className={styles.navLink}
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
