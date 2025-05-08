export const sleep = (delay) =>
  new Promise((resolve) => setTimeout(() => resolve(), delay));

export const convertCoordsToChipIdx = (x, y) => {
  return y * 7 + x;
};
export const checkHorizontally = (grid, y, x, playerVal) => {
  // console.log("checkHorizontally")
  let coords = [];
  let counter = 1;

  let hitEnd = false;
  coords.push(convertCoordsToChipIdx(x, y));

  let tempX = x - 1;
  while (!hitEnd) {
    if (!grid[y][tempX] || grid[y][tempX] != playerVal) {
      hitEnd = true;
      break;
    }
    coords.push(convertCoordsToChipIdx(tempX, y));

    tempX--;

    counter++;
  }
  // console.log("Horizontal-Counter",counter)
  // return counter;
  if (counter >= 4) return { hasWon: true, coords };
  return { hasWon: false, coords: null };
};

export const checkVertically = (grid, y, x, playerVal, coords) => {
  // console.log("checkVertically")
  coords = [];
  let counter = 1;
  let hitEnd = false;
  coords.push(convertCoordsToChipIdx(x, y));
  let tempY = y - 1;
  while (!hitEnd) {
    if (tempY < 0 || grid[tempY][x] != playerVal) {
      hitEnd = true;
      // console.log("end the loop ---")
      break;
    }
    // console.log("Counter",counter);
    coords.push(convertCoordsToChipIdx(x, tempY));
    tempY--;

    counter++;
  }
  // console.log("Vertical-Counter", counter);
  if (counter >= 4) return { hasWon: true, coords };
  return { hasWon: false, coords: null };
};

export const checkDiagonalBottomLeftTopRight = (grid, y, x, playerVal) => {
  // console.log("checkDiagonalTopLeftBottomRight")
  let coords = [];

  let counter = 1;
  let hitEnd = false;
  coords.push(convertCoordsToChipIdx(x, y));
  let tempY = y - 1;
  let tempX = x + 1;
  while (!hitEnd) {
    if (
      tempY < 0 ||
      tempX >= grid[0].length ||
      grid[tempY][tempX] != playerVal
    ) {
      hitEnd = true;
      // console.log("end the loop ---")
      break;
    }
    // console.log("Counter",counter);
    coords.push(convertCoordsToChipIdx(tempX, tempY));

    tempY--;
    tempX++;
    counter++;
  }
  // console.log("DiagonalBottomLeftTopRight",counter)
  if (counter >= 4) return { hasWon: true, coords };
  return { hasWon: false, coords: null };
};

export const checkDiagonalTopLeftBottomRight = (grid, y, x, playerVal) => {
  let coords = [];

  let counter = 1;
  let hitEnd = false;
  coords.push(convertCoordsToChipIdx(x, y));
  let tempY = y + 1;
  let tempX = x + 1;
  while (!hitEnd) {
    if (
      tempY >= grid.length ||
      tempX >= grid[0].length ||
      grid[tempY][tempX] != playerVal
    ) {
      hitEnd = true;
      // console.log("end the loop ---")
      break;
    }
    // console.log("Counter",counter);
    coords.push(convertCoordsToChipIdx(tempX, tempY));
    tempY++;
    tempX++;
    counter++;
  }
  // console.log("DiagonalTopLeftBottomRight",counter)
  if (counter >= 4) return { hasWon: true, coords };
  return { hasWon: false, coords: null };
};
