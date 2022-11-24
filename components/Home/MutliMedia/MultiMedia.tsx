import styles from "./MultiMedia.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export function MultiMedia() {
  return (
    <li className={styles.project}>
      <Image
        src="/logos/bull.png"
        alt="bull"
        className={styles.project__img}
        width={600}
        height={300}
      />
      <article className={styles.project__description}>
        <h2 className={styles.project__title}>Bull in the garden</h2>
        <p>Point and click adventure game</p>
        <div className={styles.buttonContainer}>
          <Link href="/games/bull-in-the-garden">
            <button className="btn btn--dark btn--icon">Play </button>
          </Link>
          <Link href="/games/bull-in-the-garden">
            <button className="btn btn--light btn--icon">
              Code <FontAwesomeIcon icon={faGithub} size="lg" color="black" />
            </button>
          </Link>
        </div>
      </article>
    </li>
  );
}
