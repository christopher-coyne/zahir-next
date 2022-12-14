import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import { roomsInfo } from "../roomsInfo";
import { RoomsContext } from "components/Games/Rooms";
import { Room } from "interfaces/Room";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./GardenRoom.module.css";
export function GardenRoom() {
  const { inventory, setInventory, roomHistory, currentRoom, setCurrentRoom } =
    useContext(PlayerContext);
  const { rooms, removeItem } = useContext(RoomsContext);
  console.log("current Room ", currentRoom);

  console.log("roomHistory ", roomHistory);

  const currentRoomInfo = rooms.find((room: Room) => room.name === currentRoom);

  console.log("currentRoomInfo ", currentRoomInfo);

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

  const backgroundImage = `url(\"/bull-in-the-garden/rooms/node-${
    currentRoomInfo!.name
  }.png\")`;
  console.log("new background igm ", backgroundImage);
  return (
    <div
      className={styles.Container}
      style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
    >
      <h3>Go To Rooms:</h3>
      {room.adjacent.map((adjacent) => (
        <button
          key={adjacent.name}
          onClick={() => changeRoom(adjacent.name)}
          className={styles.changeRoomButton}
          title={`node ${adjacent.name}`}
          style={{ top: `${adjacent.x}%`, left: `${adjacent.y}%` }}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            size="lg"
            color="white"
            style={{ transform: `rotate(${adjacent.direction}deg)` }}
          />
        </button>
      ))}
      <h3>Items:</h3>
      {!!currentRoomInfo!.items.length && (
        <button onClick={() => takeRose()}>rose</button>
      )}
    </div>
  );
}
