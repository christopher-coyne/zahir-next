import styles from "./MultiMedia.module.css";
import Image from "next/image";
import Link from "next/link";
export function MultiMedia() {
  return (
    <li className={styles.project}>
      <div className={styles.project__imgContainer}>
        <Image
          src="/bull-in-the-garden/rooms/node-a.png"
          alt="bull"
          className={styles.project__img}
          fill
        />
      </div>
      <article className={styles.project__description}>
        <h2 className={styles.project__title}>Bull in the garden</h2>
        <p>Point and click adventure game</p>
        <div className={styles.buttonContainer}>
          <Link href="/games/bull-in-the-garden">
            <button className="btn btn--dark btn--icon">Play </button>
          </Link>
        </div>
      </article>
    </li>
  );
}
