import Head from "next/head";
import Image from "next/image";
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
            <div>
              <Image
                src="/logos/bull.png"
                alt="zahir image"
                className="logo"
                width={300}
                height={200}
              />
              <h1>Zahir</h1>
              <h2>Art and Entertainment</h2>
              <a href="#multimedia">
                <button className="btn btn--dark">All Art</button>
              </a>
            </div>
          </section>
          <section className={styles.body}>
            <section id="#multimedia">
              <div className="h1-container">
                <h1>Multimedia and Games</h1>
                <hr />
              </div>
              <ul>
                <li className="project">
                  <Image
                    src="/logos/bull.png"
                    alt="bull"
                    className="project__img"
                    width={300}
                    height={200}
                  />
                  <article>
                    <h2>Bull in the garden</h2>
                    <p>Point and click adventure game</p>
                  </article>
                </li>
              </ul>
            </section>
            <section className=".traditional-art">
              <div className="h1-container">
                <h1>Traditional Art</h1>
                <hr />
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
