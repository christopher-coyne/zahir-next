// takes a look at the room history and determines whether the player has lost
export const isEnd = (history: string[]) => {
  const seenEdges: { [key: string]: number } = {};
  const rooms = history.slice(1);

  console.log("rooms check... ", rooms);

  // numbe of times you have crossed the same path
  let crossTally = 0;
  for (let x = 0; x < rooms.length - 1; x++) {
    const edge = [rooms[x], rooms[x + 1]];
    edge.sort();
    const strEdge = edge.join("");
    if (seenEdges[strEdge]) {
      // loss
      /*
      if (seenEdges[strEdge] == 2) {
        return true;
      }
      */
      crossTally += 1;
    } else seenEdges[strEdge] = 1;
  }

  console.log("cross tally : ", crossTally);
  if (crossTally >= 3) {
    return true;
  }

  return false;
};
