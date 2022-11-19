import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import { GardenRoom } from "./Rooms/GardenRoom";
import { Start } from "./Rooms/Start";
export function GameRoom() {
  const { inventory, currentRoom } = useContext(PlayerContext);
  console.log("current Room ", currentRoom);

  if (currentRoom === "") {
    return <Start />;
  }
  if (currentRoom === "gardenroom") {
    return <GardenRoom />;
  }
  return <div>game room...</div>;
}
