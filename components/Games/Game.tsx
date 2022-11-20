import Image from "next/image";
import { useContext } from "react";
import styles from "./Game.module.css";
import { Player, PlayerContext } from "./Player";
import { Rooms } from "./Rooms";
import { RoomsProps } from "./constants";

export function Game({ children, initialRooms }: RoomsProps) {
  return (
    <Rooms initialRooms={initialRooms}>
      <Player>{children}</Player>
    </Rooms>
  );
}
