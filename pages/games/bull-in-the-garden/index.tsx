import styles from "../Games.module.css";
import { GameRoom } from "components/BullInTheGarden";
import { Game } from "components/Games";
import { Back } from "components/Layout/Back/Back";

import { initialRooms } from "components/BullInTheGarden/initalRooms";
import { useState } from "react";

export default function BullInTheGarden() {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <>
      <div className={styles.backContainer}>
        <Back prevLink="/" prev="Home" current="Bull in the garden"></Back>
      </div>
      <div className={fullscreen ? styles.fullscreen : styles.gameContainer}>
        <Game initialRooms={initialRooms}>
          <GameRoom setFullscreen={setFullscreen} />
        </Game>
      </div>
    </>
  );
}
