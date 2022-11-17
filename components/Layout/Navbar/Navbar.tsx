import Image from "next/image";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            color="white"
            className="hover--light-blue"
          />
        </li>
        <li>
          <a href="www.google.com">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color="white"
              className="hover--light-blue"
            />
          </a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
