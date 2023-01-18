// takes a look at the room history and determines whether the player has lost
export const isEnd = (history: string[]) => {
  const seenEdges: { [key: string]: number } = {};
  const rooms = history.slice(1);

  // numbe of times you have crossed the same path
  let crossTally = 0;
  for (let x = 0; x < rooms.length - 1; x++) {
    const edge = [rooms[x], rooms[x + 1]];
    edge.sort();
    const strEdge = edge.join("");
    if (seenEdges[strEdge]) {
      crossTally += 1;
    } else seenEdges[strEdge] = 1;
  }
  if (crossTally >= 3) {
    return true;
  }

  return false;
};

// takes a look at the room history and determines the number of times next room will generate a cross
export const previousCrosses = (history: string[], nextRoom: string) => {
  const seenEdges: { [key: string]: number } = {};
  const rooms = history.slice(1);

  // numbe of times you have crossed the same path
  let crossTally = 0;
  for (let x = 0; x < rooms.length - 1; x++) {
    const edge = [rooms[x], rooms[x + 1]];
    edge.sort();
    const strEdge = edge.join("");
    if (seenEdges[strEdge]) {
      crossTally += 1;
    } else seenEdges[strEdge] = 1;
  }

  const newEdge = [rooms.slice(-1), nextRoom];
  newEdge.sort();
  const newEdgeStr = newEdge.join("");
  if (seenEdges[newEdgeStr]) {
    // return seenEdges[newEdgeStr];
    return crossTally + 1;
  }

  return 0;
};
