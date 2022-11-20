import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import { roomsInfo } from "../roomsInfo";
import { RoomsContext } from "components/Games/Rooms";
import { Room } from "interfaces/Room";
export function GardenRoom() {
  const { inventory, roomHistory, currentRoom, setCurrentRoom } =
    useContext(PlayerContext);
  const { rooms } = useContext(RoomsContext);
  console.log("current Room ", currentRoom);

  console.log("roomHistory ", roomHistory);

  const currentRoomInfo = rooms.filter(
    (room: Room) => room.name === currentRoom
  )[0];

  const changeRoom = (roomName: string) => {
    setCurrentRoom(roomName);
  };

  const room = roomsInfo[currentRoom];

  console.log("room info : ", room);
  return (
    <div>
      <h3>Go To Rooms:</h3>
      {room.adjacent.map((adjacent) => (
        <button key={adjacent.name} onClick={() => changeRoom(adjacent.name)}>
          Go To {adjacent.name}
        </button>
      ))}
      <h3>Items:</h3>
      {!!currentRoomInfo.items.length && <h4>rose</h4>}
    </div>
  );
}
