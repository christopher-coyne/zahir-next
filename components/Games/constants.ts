import React from "react";
import { Room } from "interfaces/Room";

export type PlayerProps = {
  children: React.ReactNode;
};

export type RoomsProps = {
  children: React.ReactNode;
  initialRooms: Room[];
};
