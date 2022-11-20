import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import { GardenRoom } from "./Rooms/GardenRoom/GardenRoom";
import { Start } from "./Rooms/Start/Start";
import { RoomsContext } from "components/Games/Rooms";
import { isEnd } from "./helpers";
import { End } from "./Rooms/End/End";
export function GameRoom() {
  const { inventory, roomHistory, currentRoom, setCurrentRoom } =
    useContext(PlayerContext);

  const { rooms } = useContext(RoomsContext);

  console.log("rooms in context : ", rooms);

  // 0: no end, 1: loss, 2: win
  const hasLost = isEnd(roomHistory);

  if (hasLost) {
    return <End />;
  }
  if (currentRoom === "") {
    return <Start />;
  }
  return <GardenRoom />;
}
