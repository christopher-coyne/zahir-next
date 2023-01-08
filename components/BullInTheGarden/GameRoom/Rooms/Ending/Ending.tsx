import { Props } from "./constants";
import Image from "next/image";
import styles from "./Ending.module.css";

export function Ending({ endType }: Props) {
  return (
    <div className={styles.container}>
      <h2>
        {endType === "loss"
          ? "You have found the Bull."
          : `How could such sweet and wholesome hours
Be reckon’d but with herbs and flow’rs! `}
      </h2>
      {endType === "loss" ? (
        <Image width={350} height={200} src="/logos/bull.png" alt="bull" />
      ) : (
        <Image
          width={400}
          height={230}
          src="/bull-in-the-garden/layout/final_flowers_no_bg.png"
          alt="flowers"
          className={styles.flowers}
        />
      )}
      <div className={styles.replayContainer}>
        <h3>
          {endType === "loss"
            ? "To avoid the bull, do not recross paths more than twice."
            : `You have found all 3 flowers. To find the bull, double-cross paths 3 times. `}
        </h3>
        <button className={`btn btn--dark ${styles.button}`}> Replay</button>
      </div>
    </div>
  );
}
