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
});

export function Rooms({ children, initialRooms }: RoomsProps) {
  const [rooms, setRooms] = useState<Room[]>(initialRooms);

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
}
