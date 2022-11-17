import { Game } from "components/Games";
import styles from "./ControlPanel.module.css";

export function ControlPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.controlPanel}>
        <h4>0/3 Collected</h4>
        <button className={`btn--dark ${styles.btn}`}>Restart</button>
      </div>
    </div>
  );
}
