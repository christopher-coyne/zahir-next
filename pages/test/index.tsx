import styles from "./BullEncounter.module.css";

export default function BullEncounter() {
  return (
    <div className={styles.container}>
      <video autoPlay muted width="100%" height="100%" loop>
        <source
          src="/bull-in-the-garden/bull/final_bull.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
