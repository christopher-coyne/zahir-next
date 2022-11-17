import Head from "next/head";
import Image from "next/image";
import { Game } from "components/Games";
import styles from "../Games.module.css";
import { ControlPanel, GameRoom } from "components/BullInTheGarden";

export default function BullInTheGarden() {
  return (
    <div className={styles.gameContainer}>
      <GameRoom />
      <ControlPanel />
    </div>
  );
}
