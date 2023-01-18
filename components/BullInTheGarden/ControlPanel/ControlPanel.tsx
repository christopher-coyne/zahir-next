import { useContext } from "react";
import styles from "./ControlPanel.module.css";
import { PlayerContext } from "components/Games/Player";
import { RoomsContext } from "components/Games/Rooms";
import { initialRooms } from "components/BullInTheGarden/initalRooms";

export function ControlPanel() {
  const { inventory, setCurrentRoom, setInventory, setRoomHistory } =
    useContext(PlayerContext);
  const { setRooms } = useContext(RoomsContext);

  const restart = () => {
    setRoomHistory([]);
    setInventory([]);
    setCurrentRoom("");
    setRooms(initialRooms);
  };
  return (
    <div className={styles.controlPanel}>
      <h4>{inventory.length}/3 Collected</h4>
      <button className={`btn--dark ${styles.btn}`} onClick={() => restart()}>
        Restart
      </button>
    </div>
  );
}
