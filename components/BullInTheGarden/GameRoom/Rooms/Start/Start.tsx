import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import styles from "./Start.module.css";
import Image from "next/image";

export function Start() {
  const { setCurrentRoom } = useContext(PlayerContext);
  const startGame = () => {
    setCurrentRoom("a");
  };
  return (
    <div className={styles.startContainer}>
      <h2 className={styles.titze}>Bull In The Garden</h2>
      <Image
        src="/bull-in-the-garden/layout/hero2.png"
        alt="bull"
        className={styles.project__img}
        width={300}
        height={300}
        priority
      />
      <h4>Turn on sound for best experience</h4>
      <button
        className={`btn btn--dark ${styles.startButton}`}
        onClick={() => startGame()}
      >
        Start
      </button>
    </div>
  );
}
