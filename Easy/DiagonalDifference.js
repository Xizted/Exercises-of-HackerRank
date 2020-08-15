let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

let rightDiagonalTotal = 0;
let leftDiagonalTotal = 0;
let total = 0;

for (let i = 0; i < arr.length; i++) {
  const rightDiagonal = arr[i][i];
  const leftDiagonal = arr[i][arr.length - 1 - i];
  rightDiagonalTotal += rightDiagonal;
  leftDiagonalTotal += leftDiagonal;
}
total += Math.abs(rightDiagonalTotal - leftDiagonalTotal);

console.log(total);
