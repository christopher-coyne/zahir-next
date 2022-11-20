import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import styles from "./Start.module.css";

export function Start() {
  const { setCurrentRoom } = useContext(PlayerContext);
  const startGame = () => {
    setCurrentRoom("a");
  };
  return (
    <div className={styles.startContainer}>
      <h2 className={styles.titze}>Bull In The Garden</h2>
      <button
        className={`btn btn--dark ${styles.startButton}`}
        onClick={() => startGame()}
      >
        Start
      </button>
    </div>
  );
}
