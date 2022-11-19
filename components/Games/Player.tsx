import React, { useState, Dispatch } from "react";
import Image from "next/image";
import { useContext } from "react";
import styles from "./Game.module.css";
import { Item } from "interfaces/Item";
import { Props } from "./constants";

export const PlayerContext = React.createContext({
  currentRoom: "",
  setCurrentRoom: {} as Dispatch<React.SetStateAction<string>>,
  inventory: [] as Item[],
  setInventory: {} as Dispatch<React.SetStateAction<Item[]>>,
});

export function Player({ children }: Props) {
  const [currentRoom, setCurrentRoom] = useState<string>("");
  const [inventory, setInventory] = useState<Item[]>([]);
  return (
    <PlayerContext.Provider
      value={{ currentRoom, setCurrentRoom, inventory, setInventory }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
