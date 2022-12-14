import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import { roomsInfo } from "../roomsInfo";
import { RoomsContext } from "components/Games/Rooms";
import { Room } from "interfaces/Room";
import styles from "./GardenRoom.module.css";
export function GardenRoom() {
  const { inventory, setInventory, roomHistory, currentRoom, setCurrentRoom } =
    useContext(PlayerContext);
  const { rooms, removeItem } = useContext(RoomsContext);
  console.log("current Room ", currentRoom);

  console.log("roomHistory ", roomHistory);

  const currentRoomInfo = rooms.filter(
    (room: Room) => room.name === currentRoom
  )[0];

  const changeRoom = (roomName: string) => {
    setCurrentRoom(roomName);
  };

  const room = roomsInfo[currentRoom];

  const takeRose = () => {
    const newRose = { name: "rose", history: [] };
    setInventory((prev) => [...prev, newRose]);
    removeItem(currentRoom);
  };

  console.log("room info : ", room);
  return (
    <div className={styles.Container}>
      <h3>Go To Rooms:</h3>
      {room.adjacent.map((adjacent) => (
        <button
          key={adjacent.name}
          onClick={() => changeRoom(adjacent.name)}
          className={styles.changeRoomButton}
        >
          Go To {adjacent.name}
        </button>
      ))}
      <h3>Items:</h3>
      {!!currentRoomInfo.items.length && (
        <button onClick={() => takeRose()}>rose</button>
      )}
    </div>
  );
}
