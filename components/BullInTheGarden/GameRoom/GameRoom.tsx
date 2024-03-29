import { useContext } from "react";
import { PlayerContext } from "components/Games/Player";
import { GardenRoom } from "./Rooms/GardenRoom/GardenRoom";
import { Start } from "./Rooms/Start/Start";
import { isEnd } from "./helpers";
import { Ending } from "./Rooms/Ending/Ending";
import { Props } from "./constants";

export function GameRoom({ setFullscreen }: Props) {
  const { inventory, roomHistory, currentRoom } = useContext(PlayerContext);

  // 0: no end, 1: loss, 2: win
  const hasLost = isEnd(roomHistory);

  if (inventory.length === 3) {
    return <Ending endType="win" setFullscreen={setFullscreen} />;
  }
  if (hasLost) {
    return <Ending endType="loss" setFullscreen={setFullscreen} />;
  }
  if (currentRoom === "") {
    return <Start />;
  }
  return <GardenRoom setFullscreen={setFullscreen} />;
}
