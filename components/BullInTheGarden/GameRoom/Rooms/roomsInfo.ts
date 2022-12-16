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

type PoemType = {
  blurb: string;
};

type roomsInfoType = {
  [key: string]: {
    items: ItemType[];
    adjacent: AdjacentNodeType[];
    poem: PoemType;
  };
};

export const roomsInfo: roomsInfoType = {
  a: {
    poem: {
      blurb: `How vainly men themselves amaze
    To win the palm, the oak, or bays,
    And their uncessant labours see
    Crown’d from some single herb or tree,`,
    },
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [
      { name: "b", x: 65, y: 0, direction: 320 },
      { name: "d", x: 55, y: 5, direction: 330 },
      { name: "g", x: 70, y: 80, direction: 75 },
      { name: "j", x: 90, y: 20, direction: 180 },
    ],
  },
  b: {
    poem: {
      blurb: `Here at the fountain’s sliding foot,
      Or at some fruit tree’s mossy root,
      Casting the body’s vest aside,
      My soul into the boughs does glide;`,
    },
    items: [],
    adjacent: [
      { name: "c", x: 90, y: 60, direction: 150 },
      { name: "a", x: 25, y: 40, direction: 50 },
    ],
  },
  c: {
    poem: {
      blurb: `Apollo hunted Daphne so,
        Only that she might laurel grow;
        And Pan did after Syrinx speed,
        Not as a nymph, but for a reed.`,
    },
    items: [],
    adjacent: [
      { name: "d", x: 90, y: 80, direction: 150 },
      { name: "b", x: 90, y: 10, direction: 230 },
    ],
  },
  d: {
    poem: {
      blurb: `Meanwhile the mind, from pleasure less,
      Withdraws into its happiness;
      The mind, that ocean where each kind
      Does straight its own resemblance find,`,
    },
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [
      { name: "e", x: 70, y: 60, direction: 0 },
      { name: "c", x: 90, y: 10, direction: 250 },
      { name: "a", x: 90, y: 90, direction: 150 },
    ],
  },
  e: {
    poem: {
      blurb: `Yet it creates, transcending these,
      Far other worlds, and other seas;
      Annihilating all that’s made
      To a gray thought in a green shade.`,
    },
    items: [],
    adjacent: [{ name: "d", x: 90, y: 50, direction: 180 }],
  },
  f: {
    poem: {
      blurb: `The nectarine and curious peach
      Into my hands themselves do reach;
      Stumbling on melons as I pass,
      Ensnar’d with flow’rs, I fall on grass.`,
    },
    items: [{ name: "rose", x: 20, y: 10 }],
    adjacent: [{ name: "g", x: 80, y: 80, direction: 230 }],
  },
  g: {
    poem: {
      blurb: `The nectarine and curious peach
      Into my hands themselves do reach;
      Stumbling on melons as I pass,
      Ensnar’d with flow’rs, I fall on grass.`,
    },
    items: [],
    adjacent: [
      { name: "f", x: 30, y: 55, direction: 320 },
      { name: "h", x: 30, y: 70, direction: 45 },
      { name: "a", x: 90, y: 75, direction: 150 },
    ],
  },
  h: {
    poem: {
      blurb: `Your sacred plants, if here below,
      Only among the plants will grow.
      Society is all but rude,
      To this delicious solitude.`,
    },
    items: [],
    adjacent: [{ name: "g", x: 85, y: 85, direction: 150 }],
  },
  i: {
    poem: {
      blurb: `Little, alas, they know or heed
      How far these beauties hers exceed!
      Fair trees! wheres’e’er your barks I wound,
      No name shall but your own be found.
      `,
    },
    items: [],
    adjacent: [{ name: "j", x: 90, y: 50, direction: 160 }],
  },
  j: {
    poem: {
      blurb: `Such was that happy garden-state,
      While man there walk’d without a mate;
      After a place so pure and sweet,
      What other help could yet be meet!
      `,
    },
    items: [],
    adjacent: [
      { name: "k", x: 40, y: 50, direction: 110 },
      { name: "a", x: 90, y: 50, direction: 150 },
      { name: "i", x: 50, y: 5, direction: 260 },
    ],
  },
  k: {
    poem: {
      blurb: `But ’twas beyond a mortal’s share
      To wander solitary there:
      Two paradises ’twere in one
      To live in paradise alone.
      `,
    },
    items: [{ name: "j", x: 20, y: 10 }],
    adjacent: [{ name: "j", x: 80, y: 10, direction: 260 }],
  },
};
