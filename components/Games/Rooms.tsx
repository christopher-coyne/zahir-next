import React, { useState } from "react";
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
