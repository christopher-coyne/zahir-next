import Image from "next/image";
import styles from "./Navbar.module.css";
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <Image
            src="/logos/github-light.svg"
            alt="instagram"
            width={20}
            height={20}
          />
        </li>
        <li>
          <Image
            src="/logos/instagram-light.svg"
            alt="instagram"
            width={20}
            height={20}
          />
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
