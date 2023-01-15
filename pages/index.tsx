import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Layout/Navbar";
import styles from "/styles/Home.module.css";
import { TraditionalArt } from "components/Home/TraditionalArt/TraditionalArt";
import { MultiMedia } from "components/Home/MutliMedia/MultiMedia";
import { Title } from "components/Layout/Title/Title";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zahir Art</title>
        <meta name="description" content="Zahir Art and Entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id="content">
          <section className={styles.hero}>
            <div className={styles.logoContainer}>
              <Image
                src="/logos/bull.png"
                alt="zahir image"
                className="logo"
                width={300}
                height={200}
                priority
              />
            </div>
            <div className={styles.titleContainer}>
              <h1 className={styles.heroTitle}>Zahir</h1>
              <h2 className={styles.heroSubtitle}>Art and Entertainment</h2>
            </div>
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
          </section>
          <section>
            <section id="#multimedia">
              <Title text="Multimedia and Games" />
              <ul>
                <MultiMedia />
              </ul>
            </section>
            <section className={styles.traditionalArt}>
              <Title text="Traditional Art" />
              <div className={styles.traditionalArt}>
                <p className={styles.followText}>
                  Follow Me on{" "}
                  <a
                    href="https://www.instagram.com/zahir_red/"
                    className={`link  ${styles.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      className={styles.traditional__logo}
                    />{" "}
                    Instagram
                  </a>
                </p>
                <TraditionalArt />
              </div>
            </section>
          </section>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
