import Head from "next/head";
import Image from "next/image";
import styles from "../Games.module.css";
import { ControlPanel, GameRoom } from "components/BullInTheGarden";
import { Game } from "components/Games";

import { initialRooms } from "components/BullInTheGarden/initalRooms";

export default function BullInTheGarden() {
  return (
    <div className={styles.gameContainer}>
      <Game initialRooms={initialRooms}>
        <GameRoom />
        <ControlPanel />
      </Game>
    </div>
  );
}
