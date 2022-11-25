import Image from "next/image";
import styles from "/styles/Drawing.module.css";
import Link from "next/link";

const drawing = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={`link ${styles.link}`}>
        Back
      </Link>
      <section className={styles.artContainer}>
        <div className={styles.imgContainer}>
          <Image alt="drawing" fill src="/thumbnails/Falling Through.png" />
        </div>
        <article className={styles.blurb}>
          <div>
            <h2>Prospero</h2>
            <hr className={styles.break} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            augue purus, feugiat a nunc sit amet, porta mattis urna. In hac
            habitasse platea dictumst. Donec consequat vulputate tellus, nec
            luctus libero. Suspendisse potenti. Ut sed porta nulla, vitae
            imperdiet ligula. Donec ipsum nibh, tempus at nunc quis, consequat
            fringilla urna. Mauris facilisis nisl a imperdiet porta.
          </p>
          <p>June 20, 2020</p>
        </article>
      </section>
    </div>
  );
};

export default drawing;
