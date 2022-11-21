import React, { useState, Dispatch } from "react";
import Image from "next/image";
import { useContext } from "react";
import styles from "./Game.module.css";
import { Item } from "interfaces/Item";
import { RoomsProps } from "./constants";
import { Room } from "interfaces/Room";

export const RoomsContext = React.createContext({
  rooms: [] as Room[],
  setRooms: {} as any,
  removeItem: {} as (currentRoom: string) => void,
});

export function Rooms({ children, initialRooms }: RoomsProps) {
  const [rooms, setRooms] = useState<Room[]>(initialRooms);

  const removeItem = (currentRoom: string) => {
    let idx = 0;
    for (const room of initialRooms) {
      if (room.name === currentRoom) {
        break;
      }
      idx += 1;
    }
    // console.log("room to change ", roomToChange);
    const newRoom = { name: rooms[idx].name, items: [] };
    const oldCopy = [...rooms];
    oldCopy[idx] = newRoom;
    setRooms(oldCopy);
  };

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        removeItem,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
}
