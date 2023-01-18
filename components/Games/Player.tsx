import React, { useState, Dispatch } from "react";
import { Item } from "interfaces/Item";
import { PlayerProps } from "./constants";

export const PlayerContext = React.createContext({
  inventory: [] as Item[],
  setInventory: {} as Dispatch<React.SetStateAction<Item[]>>,
  roomHistory: [] as string[],
  setRoomHistory: {} as Dispatch<React.SetStateAction<string[]>>,
  currentRoom: "",
  setCurrentRoom: {} as any,
});

export function Player({ children }: PlayerProps) {
  const [roomHistory, setRoomHistory] = useState<string[]>([""]);
  const [inventory, setInventory] = useState<Item[]>([]);

  const currentRoom = roomHistory[roomHistory.length - 1];

  const setCurrentRoom = (roomName: string) => {
    setRoomHistory((prev: string[]) => [...prev, roomName]);
  };
  return (
    <PlayerContext.Provider
      value={{
        inventory,
        setInventory,
        roomHistory,
        setRoomHistory,
        currentRoom,
        setCurrentRoom,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
