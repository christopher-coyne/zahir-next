import { useContext, useState } from "react";
import { PlayerContext } from "components/Games/Player";
import Image from "next/image";
import { roomsInfo } from "../roomsInfo";
import { RoomsContext } from "components/Games/Rooms";
import { Room } from "interfaces/Room";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./GardenRoom.module.css";
import { previousCrosses } from "../../helpers";
import BullEncounter from "../BullEncounter/BullEncounter";
export function GardenRoom() {
  const { inventory, setInventory, roomHistory, currentRoom, setCurrentRoom } =
    useContext(PlayerContext);
  const [prevCrosses, setPrevCrosses] = useState(0);
  const { rooms, removeItem } = useContext(RoomsContext);
  const currentRoomInfo = rooms.find((room: Room) => room.name === currentRoom);
  const room = roomsInfo[currentRoom];

  console.log("currentRoomInfo ", currentRoomInfo);

  const changeRoom = (roomName: string) => {
    console.log("previous crosses ", previousCrosses(roomHistory, roomName));
    const prevCrosses = previousCrosses(roomHistory, roomName);
    if (prevCrosses) {
      setPrevCrosses(prevCrosses);
      setTimeout(() => {
        setCurrentRoom(roomName);
        setPrevCrosses(0);
      }, prevCrosses * 1000);
    } else {
      setCurrentRoom(roomName);
    }
  };

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

  if (prevCrosses) {
    console.log("PREV CROSSES ", currentRoomInfo!.name);
    return <BullEncounter />;
  }
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
    >
      <p className={styles.poem}>{room.poem.blurb}</p>
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
        <div
          className={styles.flowerContainer}
          style={{
            position: "absolute",
            top: `${room.items[0].x}%`,
            left: `${room.items[0].y}%`,
          }}
          onClick={() => takeRose()}
        >
          <div className={styles.takeRose}>Take Flowers</div>
          <Image
            src="/bull-in-the-garden/layout/simple_flowers_nobg.png"
            alt="flower"
            width={162}
            height={194}
          />
        </div>
      )}
    </div>
  );
}
