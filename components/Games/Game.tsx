import { Player } from "./Player";
import { Rooms } from "./Rooms";
import { RoomsProps } from "./constants";

export function Game({ children, initialRooms }: RoomsProps) {
  return (
    <Rooms initialRooms={initialRooms}>
      <Player>{children}</Player>
    </Rooms>
  );
}
