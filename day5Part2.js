let input = `FFFFBFBLLR
BFBFFBBLLR
BBFFFFBLRR
FBFBFFFRLL
BFFBFFFRRR`;

function findSeatId(line) {
  const binary = line.replace(/[FL]/g, "0").replace(/[BR]/g, "1")
  const [m, row, col] = binary.match(/([01]{7})([01]{3})/);
  const rowNum = Number(`0b${row}`);
  const colNum = Number(`0b${col}`);
  return rowNum * 8 + colNum;
}

let lines = input.split("\n");

let found = {};

for (const line of lines) {
  const seatId = findSeatId(line);
  found[seatId] = true;
}

for (const seatId in found) {
  const seatNum = Number(seatId);
  if (!found[seatNum + 1] && found[seatNum + 2]) {
    console.log("Your seat:", seatNum + 1);
    break;
  }
}