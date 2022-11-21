import { Game } from "components/Games";
import { useContext } from "react";
import styles from "./ControlPanel.module.css";
import { PlayerContext } from "components/Games/Player";
import { RoomsContext } from "components/Games/Rooms";

export function ControlPanel() {
  const { inventory } = useContext(PlayerContext);
  return (
    <div className={styles.container}>
      <div className={styles.controlPanel}>
        <h4>{inventory.length}/3 Collected</h4>
        <button className={`btn--dark ${styles.btn}`}>Restart</button>
      </div>
    </div>
  );
}
