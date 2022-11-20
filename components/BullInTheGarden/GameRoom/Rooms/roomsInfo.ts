// table to lookup important information about different bitg rooms
type ItemType = {
  name: string;
  x: number;
  y: number;
};

type AdjacentNodeType = {
  name: string;
  x: number;
  y: number;
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
      { name: "b", x: 20, y: 10 },
      { name: "d", x: 20, y: 10 },
      { name: "g", x: 20, y: 10 },
      { name: "j", x: 20, y: 10 },
    ],
  },
  b: {
    items: [],
    adjacent: [
      { name: "c", x: 20, y: 10 },
      { name: "a", x: 20, y: 10 },
    ],
  },
  c: {
    items: [],
    adjacent: [
      { name: "d", x: 20, y: 10 },
      { name: "b", x: 20, y: 10 },
    ],
  },
  d: {
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [
      { name: "e", x: 20, y: 10 },
      { name: "c", x: 20, y: 10 },
      { name: "a", x: 20, y: 10 },
    ],
  },
  e: {
    items: [],
    adjacent: [{ name: "e", x: 20, y: 10 }],
  },
  f: {
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [{ name: "g", x: 20, y: 10 }],
  },
  g: {
    items: [],
    adjacent: [
      { name: "f", x: 20, y: 10 },
      { name: "h", x: 20, y: 10 },
      { name: "a", x: 20, y: 10 },
    ],
  },
  h: {
    items: [],
    adjacent: [{ name: "g", x: 20, y: 10 }],
  },
  i: {
    items: [],
    adjacent: [{ name: "j", x: 20, y: 10 }],
  },
  j: {
    items: [],
    adjacent: [
      { name: "k", x: 20, y: 10 },
      { name: "a", x: 20, y: 10 },
      { name: "i", x: 20, y: 10 },
    ],
  },
  k: {
    items: [{ name: "j", x: 20, y: 10 }],
    adjacent: [{ name: "j", x: 20, y: 10 }],
  },
};
