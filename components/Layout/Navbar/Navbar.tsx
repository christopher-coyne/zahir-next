import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <a href="https://github.com/christopher-coyne/zahir-next">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              color="white"
              className="hover--light-blue"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/zahir_red/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color="white"
              className="hover--light-blue"
            />
          </a>
        </li>
        <li>
          <a href="www.google.com" className="hover--light-blue">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
