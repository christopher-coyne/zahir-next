import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Layout/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zahir Art</title>
        <meta name="description" content="Zahir Art and Entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <section className={styles.hero}>
            <div className={styles.imageContainer}>
              <Image
                src="/logos/bull.png"
                alt="zahir image"
                className="logo"
                width={300}
                height={200}
              />
              <h1 className={styles.heroTitle}>Zahir</h1>
              <h2 className={styles.heroSubtitle}>Art and Entertainment</h2>
              <a href="#multimedia">
                <button className="btn btn--dark btn--icon">
                  <div>All Art</div>
                  <Image
                    src="/logos/down-triangle-light.svg"
                    width={15}
                    height={15}
                    alt="V"
                  />
                </button>
              </a>
            </div>
          </section>
          <section className={styles.body}>
            <section id="#multimedia">
              <div className={styles.titleContainer}>
                <h1>Multimedia and Games</h1>
                <hr className={styles.break} />
              </div>
              <ul>
                <li className={styles.project}>
                  <Image
                    src="/logos/bull.png"
                    alt="bull"
                    className={styles.project__img}
                    width={300}
                    height={200}
                  />
                  <article>
                    <h2>Bull in the garden</h2>
                    <p>Point and click adventure game</p>
                    <Link href="/games/bull-in-the-garden">
                      <button className="btn btn--dark btn--icon">
                        Play{" "}
                        <Image
                          src="/logos/right-triangle-light.svg"
                          width={15}
                          height={15}
                          alt="V"
                        />
                      </button>
                    </Link>
                  </article>
                </li>
              </ul>
            </section>
            <section className={styles.traditionalArt}>
              <div className="titleContainer">
                <h1>Traditional Art</h1>
                <hr className={styles.break} />
              </div>
              <h2>Follow Me on Instagram</h2>
            </section>
          </section>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
