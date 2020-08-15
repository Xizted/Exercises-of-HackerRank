let ar = [4, 20, 1, 3, 20];
let heightCandles = 0;
let totalCandles = 0;

ar.sort((a, b) => b - a);

for (let i = 0; i < ar.length; i++) {
  heightCandles = ar[0];

  if (heightCandles === ar[i]) {
    totalCandles++;
  }
}
console.log(totalCandles);
