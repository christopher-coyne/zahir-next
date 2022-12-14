// table to lookup important information about different bitg rooms
type ItemType = {
  name: string;
  x: number;
  y: number;
};

// provides the name of the room, the x + y of the button position, and the direction of the arrow
type AdjacentNodeType = {
  name: string;
  x: number;
  y: number;
  direction: number;
};

type roomsInfoType = {
  [key: string]: {
    items: ItemType[];
    adjacent: AdjacentNodeType[];
  };
};

export const roomsInfo: roomsInfoType = {
  a: {
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [
      { name: "b", x: 50, y: 10, direction: 10 },
      { name: "d", x: 20, y: 10, direction: 10 },
      { name: "g", x: 20, y: 10, direction: 10 },
      { name: "j", x: 20, y: 10, direction: 10 },
    ],
  },
  b: {
    items: [],
    adjacent: [
      { name: "c", x: 20, y: 10, direction: 10 },
      { name: "a", x: 20, y: 10, direction: 10 },
    ],
  },
  c: {
    items: [],
    adjacent: [
      { name: "d", x: 20, y: 10, direction: 10 },
      { name: "b", x: 20, y: 10, direction: 10 },
    ],
  },
  d: {
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [
      { name: "e", x: 20, y: 10, direction: 10 },
      { name: "c", x: 20, y: 10, direction: 10 },
      { name: "a", x: 20, y: 10, direction: 10 },
    ],
  },
  e: {
    items: [],
    adjacent: [{ name: "e", x: 20, y: 10, direction: 10 }],
  },
  f: {
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [{ name: "g", x: 20, y: 10, direction: 10 }],
  },
  g: {
    items: [],
    adjacent: [
      { name: "f", x: 20, y: 10, direction: 10 },
      { name: "h", x: 20, y: 10, direction: 10 },
      { name: "a", x: 20, y: 10, direction: 10 },
    ],
  },
  h: {
    items: [],
    adjacent: [{ name: "g", x: 20, y: 10, direction: 10 }],
  },
  i: {
    items: [],
    adjacent: [{ name: "j", x: 20, y: 10, direction: 10 }],
  },
  j: {
    items: [],
    adjacent: [
      { name: "k", x: 20, y: 10, direction: 10 },
      { name: "a", x: 20, y: 10, direction: 10 },
      { name: "i", x: 20, y: 10, direction: 10 },
    ],
  },
  k: {
    items: [{ name: "j", x: 20, y: 10 }],
    adjacent: [{ name: "j", x: 20, y: 10, direction: 10 }],
  },
};
