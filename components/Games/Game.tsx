import Image from "next/image";
import { useContext } from "react";
import styles from "./Game.module.css";
import { Player, PlayerContext } from "./Player";
import { Props } from "./constants";

export function Game({ children }: Props) {
  return <Player>{children}</Player>;
}
