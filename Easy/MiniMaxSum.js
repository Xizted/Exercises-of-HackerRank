let arr = [1, 2, 3, 4, 5,];

let count = 0;

let total = 0;

let arrTotal = [];

while (count <= arr.length - 1) {
  total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  arrTotal.push(total - arr[count]);
  count++;
}
console.log(Math.min(...arrTotal), Math.max(...arrTotal));

console.log(...arrTotal);
