import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import { GardenRoom } from "./Rooms/GardenRoom/GardenRoom";
import { Start } from "./Rooms/Start/Start";
import { RoomsContext } from "components/Games/Rooms";
export function GameRoom() {
  const { inventory, roomHistory, currentRoom, setCurrentRoom } =
    useContext(PlayerContext);

  const { rooms } = useContext(RoomsContext);

  console.log("rooms in context : ", rooms);

  if (currentRoom === "") {
    return <Start />;
  }
  return <GardenRoom />;
}
