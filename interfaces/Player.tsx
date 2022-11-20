import { Item } from "./Item";
export type Player = {
  currentRoom: string;
  inventory: Item[];
  roomHistory: string[];
};
